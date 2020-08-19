import React from 'react'
import useSWR from 'swr'

import fetcher from '../lib/fetch'

import Layout from '../components/layout'
import Tweet from '../components/tweet'
import Loading from '../components/loading'

import styles from './index.module.css'

function HomePage() {
  const { data } = useSWR('/api/tweet', fetcher)

  return (
    <Layout>
      {!data && (
        <div className={styles.loading}>
          <Loading />
        </div>
      )}

      {data?.statuses.map((tweet) => {
        return <Tweet key={tweet.id} {...tweet}></Tweet>
      })}
    </Layout>
  )
}

export default HomePage
