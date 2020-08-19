import React from 'react'

import Layout from '../components/layout'
import Tweet from '../components/tweet'

function HomePage() {
  return (
    <Layout>
      <Tweet
        name="Yunus Emre MERT"
        slug="yunusemremert"
        datetime={new Date('2020-08-02')}
        text={`Merhaba ilk tweet

          awdaw awda

          awdaw awdaw

          a wdawd`}
      ></Tweet>
      <Tweet
        name="Yunus Emre MERT"
        slug="yunusemremert"
        datetime={new Date('2020-08-02')}
        text={`Merhaba ilk tweet

          awdaw awda

          awdaw awdaw

          a wdawd`}
      ></Tweet>
      <Tweet
        name="Yunus Emre MERT"
        slug="yunusemremert"
        datetime={new Date('2020-08-02')}
        text={`Merhaba ilk tweet

          awdaw awda

          awdaw awdaw

          a wdawd`}
      ></Tweet>
    </Layout>
  )
}

export default HomePage
