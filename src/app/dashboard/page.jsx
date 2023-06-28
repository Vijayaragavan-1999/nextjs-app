"use client"
import React from 'react'
import useSWR from 'swr'
//LearnNext
//vijaygayu12345


const fetcher = (...args) => fetch(...args).then(res => res.json())

const Dashboard = () => {
  const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher)
  console.log(data)
  console.log(error,"err")
  console.log(isLoading,"load")
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard