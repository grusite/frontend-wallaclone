import React, { useState, useEffect } from 'react'

import NavBar from '../Navbar'
import AdvertList from '../AdvertList'
import Filter from '../Filter'
import './home.css'

export default function Home({ getUserRequest, adverts, fetchAdverts, tags, loadTags, user, ui }) {
  const [params, setParams] = useState('')

  const [tagSelected, setTagSelected] = useState('')

  /* eslint-disable*/
  useEffect(() => {
    loadTags()
    fetchAdverts(params)
  }, [params])

  const onFilterChange = state => {
    let newParam = ''
    for (let param in state) {
      if (state[param] && state[param].length !== 0 && param !== 'tags') {
        if (param === 'tagSelected') {
          setTagSelected(state[param])
          newParam += `&tag=${state[param]}`
          continue
        }

        // triquiñuela para que pueda filtrar en la api por sell or buy
        if (param === 'type') {
          if (state[param] === 'sell') {
            newParam += `&venta=true`
            continue
          }
          newParam += `&venta=false`
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
      <Filter onFilterChange={onFilterChange} tagSelected={tagSelected} />
      <AdvertList adverts={adverts} isFetching={ui.isFetching} />}
    </>
  )
}
