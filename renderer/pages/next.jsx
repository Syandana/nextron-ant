import React from 'react';
import Head from 'next/Head';
import Link from 'next/Link';
import {
  Layout,
  Result,
} from 'antd';

import 'antd/dist/antd.css';

const {
  Header,
  Content,
} = Layout;

const Next = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Next</title>
      </Head>

      <Header>
        <Link href="/home">
          <a>Home</a>
        </Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link href="/next">
          <a>Page 2</a>
        </Link>
      </Header>
      <Content style={{ padding: 48 }}>
        <Result
          status="error"
          title="Nextron"
          subTitle="with Ant Design"
        />
      </Content>
    </React.Fragment>
  );
};

export default Next;
