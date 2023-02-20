import { BellFilled, MailFilled, FacebookFilled, TwitterOutlined, LinkedinFilled, DribbbleOutlined } from '@ant-design/icons';
import { Layout, Space, Col, Row, Avatar, Badge, Input, Select } from 'antd';
import '../assets/css/header.css'
import logo from '../assets/img/logo512.png'
import viral from '../assets/img/IMG_9624.JPG'
const { Search } = Input;
const { Option } = Select;
const { Header, Footer, Sider, Content } = Layout;


const onSearch = (value) => console.log(value);
const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >
    <Layout>
      <Sider className='sider'>
        <Row className='sidertop' span={24}>
          <Col span={6}>
            <img span={12} className='logo' src={logo} alt="logo not found" />
          </Col>
          <Col span={6}>
            <h2 span={12}>
              crown</h2>
          </Col>
          <Col span={12}>
            <Row span={24}>
              <Col className='iconlogoup' span={24}>
                <Badge className='solicalicon' span={12}>
                  <Avatar shape="square" icon={<MailFilled />} />
                </Badge>
                <Badge className='solicalicon' span={12}>
                  <Avatar shape="square" icon={<BellFilled />} />
                </Badge>
              </Col>
            </Row>
          </Col>

        </Row>
        <ul span={24}>
          <li className='profilepic' span={24}>
            <img className='profile' span={12} src={viral} alt="logo not found" />
            <h4>viral savaliya</h4>
            <p>Administrator</p>
          </li>
          <li>
            <p className='profilep'>NAVIGATIONS</p>
            <ul className='ullisider'>
              <li>DashBorad</li>
              <li>LayOuts</li>
            </ul>
          </li>
          <li>
            <p className='profilep'>FEATURES</p>
            <ul className='ullisider'>
              <li>Calender</li>
              <li>Maps</li>
              <li>Typography</li>
              <li>Icons</li>
              <li>Froms</li>
              <li>Graphs </li>
              <li>Tables</li>
            </ul>
          </li>
          <li>
            <p className='profilep'>EXTRAS</p>
            <ul className='ullisider'>
              <li>Login</li>
              <li>Register</li>
              <li>invoice</li>
            </ul>
          </li>

          <li>
            <ul className='ullisider social'>
              <Row span={24}>
                <Col >
                  <Badge span={4} className='solicalicon' >
                    <Avatar shape="square" icon={<FacebookFilled />} />
                  </Badge>
                  <Badge span={4} className='solicalicon' >
                    <Avatar shape="square" icon={<TwitterOutlined />} />
                  </Badge>
                  <Badge span={4} className='solicalicon' >
                    <Avatar shape="square" icon={<LinkedinFilled />} />
                  </Badge>
                  <Badge span={4} className='solicalicon' >
                    <Avatar shape="square" icon={<DribbbleOutlined />} />
                  </Badge>

                </Col>
              </Row>
            </ul>
          </li>

        </ul>
      </Sider>
      <Layout>
        <Header className='header'>
          <Row>
            <Col span={12}>
              <Badge className='logoheader' dot>
                <Avatar shape="square" icon={<MailFilled />} />
              </Badge>
              <Badge className='logoheader' dot>
                <Avatar shape="square" icon={<BellFilled />} />
              </Badge>
            </Col>
            <Col span={12} >
              <Row className='headerleft' span={24} >
                <Col className='headerleft' span={19}>
                  <Search
                    placeholder="input search text"
                    allowClear
                    onSearch={onSearch}
                    style={{
                      width: 200,
                      borderRadius: '80px'
                    }}
                  />
                </Col>
                <Col span={2}>
                  <img className='profileheader' span={12} src={viral} alt="logo not found" />
                </Col>

                <Col span={3} className='headerleft'>
                  <Input.Group compact>
                    <Select defaultValue="Option1-1">
                      <Option value="Option1-1">viral savaliya</Option>
                      <Option value="Option1-2">yash vagadiya</Option>
                    </Select>
                  </Input.Group>
                </Col>
              </Row>

            </Col>
          </Row>
        </Header>
        <Content className='context'>
          <Row span={24}>
            <h1>Basic Tables</h1>
          </Row>
        </Content>
        <Footer className='footer'>Copyrights @ <a href="#">DigitalHeaps</a></Footer>
      </Layout>
    </Layout>
  </Space >  
);
export default App;