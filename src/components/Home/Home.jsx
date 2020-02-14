import React, { useState, useEffect } from 'react';

import NavBar from '../Navbar';
import AdvertList from '../AdvertList';
import Filter from '../Filter';
import './home.css';

export default function Home({ adverts, user, fetchAdverts, ui }) {
  // const [params, setParams] = useState(user.tag ? `tag=${user.tag}` : "");
  // const [tagSelected, setTagSelected] = useState(user.tag);

  /* eslint-disable*/
  useEffect(() => {
    // fetchAdverts();
  }, []);

  const advertss = [
    {
      createdAt: '2019-11-29T20:56:55.724Z',
      description: 'Test1',
      name: 'Test1',
      photo: 'test1.jpg',
      price: 200,
      tags: ['lifestyle'],
      type: 'buy',
      updatedAt: '2019-11-29T20:56:55.724Z',
      __v: 0,
      _id: '5de18617f620e321a4126875'
    },
    {
      createdAt: '2019-11-29T20:56:55.724Z',
      description: 'Test2',
      name: 'Test2',
      photo: 'test2.jpg',
      price: 100,
      tags: ['lifestyle'],
      type: 'buy',
      updatedAt: '2019-11-29T20:56:55.724Z',
      __v: 0,
      _id: '5de18617f620e321a4126875'
    }
  ];

  // const onFilterChange = state => {
  //   let newParam = "";
  //   for (let param in state) {
  //     if (state[param] && state[param].length !== 0 && param !== "tags") {
  //       if (param === "tagSelected") {
  //         setTagSelected(state[param]);
  //         newParam += `&tag=${state[param]}`;
  //         continue;
  //       }

  //       // triquiñuela para que pueda filtrar en la api por sell or buy
  //       if (param === "type") {
  //         if (state[param] === "sell") {
  //           newParam += `&venta=true`;
  //           continue;
  //         }
  //         newParam += `&venta=false`;
  //         continue;
  //       }
  //       newParam += `&${param}=${state[param]}`;
  //     }
  //   }
  //   setParams(newParam);
  // };

  return (
    <>
      <NavBar />
      {/* <Filter onFilterChange={onFilterChange} tagSelected={tagSelected} /> */}
      {/* <AdvertList adverts={adverts.adverts} isFetching={ui.isFetching} /> */}
      <AdvertList adverts={advertss} isFetching={ui.isFetching} />
    </>
  );
}
