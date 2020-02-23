import React, { useState, useEffect } from 'react'

import NavBar from '../Navbar'
import AdvertList from '../AdvertList'
import Filter from '../Filter'
import './home.css'

export default function Home({ getUserRequest, adverts, fetchAdverts, loadTags, tags, user, ui }) {
  const [params, setParams] = useState('')

  /* eslint-disable*/
  useEffect(() => {
    fetchAdverts(params)
    loadTags()
  }, [params])

  const onFilterChange = state => {
    let newParam = ''
    for (let param in state) {
      if (state[param] && state[param].length !== 0 && param !== 'tags') {
        if (param === 'tagSelected') {
          state[param].map(tag => {
            newParam += `&tag[]=${tag}`
          })
          continue
        }

        // triquiñuela para que pueda filtrar en la api por sell or buy
        if (param === 'type') {
          if (state[param] === 'sell') {
            newParam += `&type=sell`
            continue
          }
          newParam += `&type=buy`
          continue
        }
        newParam += `&${param}=${state[param]}`
      }
    }
    setParams(newParam)
  }

  return (
    <>
      <NavBar />
      <Filter onFilterChange={onFilterChange} />
      {adverts && <AdvertList adverts={adverts} isFetching={ui.isFetching} />}
    </>
  )
}
