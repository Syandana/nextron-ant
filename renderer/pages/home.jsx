import React from 'react';
import Head from 'next/Head';
import Link from 'next/Link';
import {
  Layout,
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
} from 'antd';

import 'antd/dist/antd.css';

const {
  Header,
  Content,
} = Layout;
const { Item: FormItem } = Form;
const { Option } = Select;

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
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

      </Content>
    </React.Fragment>
  );
};

export default Home;
