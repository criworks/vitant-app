import React, { useState } from 'react';
import { Typography, Button, Card, Space, Radio, Flex, Tooltip, Divider } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { SearchOutlined, DownloadOutlined, PoweroffOutlined } from '@ant-design/icons';
import PageLayout from '../../../../components/PageLayout';

type SizeType = 'large' | 'middle' | 'small';

const { Title } = Typography;

const ButtonPage: React.FC = () => {
  const [size, setSize] = useState<SizeType>('large');
  const [loadings, setLoadings] = useState<boolean[]>([]);

  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  const breadcrumbItems = [
    { path: '/', name: 'Inicio' },
    { path: '/design-system', name: 'Design System' },
    { name: 'Button' },
  ];

  const basicButtonCode = `
import React from 'react';
import { Button, Space } from 'antd';

const App: React.FC = () => (
  <Space wrap>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Space>
);

export default App;
  `;

  const iconButtonCode = `
import React from 'react';
import { Button, Space, Tooltip } from 'antd';
import { SearchOutlined, DownloadOutlined, PoweroffOutlined } from '@ant-design/icons';

const App: React.FC = () => (
  <Space wrap>
    <Tooltip title="search">
      <Button type="primary" shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
    <Button type="primary" shape="circle">
      A
    </Button>
    <Button type="primary" icon={<SearchOutlined />}>Search</Button>
    <Tooltip title="search">
      <Button shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
    <Button icon={<SearchOutlined />}>Search</Button>
    <Tooltip title="search">
      <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
    <Button type="dashed" icon={<SearchOutlined />}>Search</Button>
    <Button icon={<DownloadOutlined />} href="/" />
    <Button danger shape="circle" icon={<PoweroffOutlined />} />
    <Button danger icon={<PoweroffOutlined />}>Poweroff</Button>
  </Space>
);

export default App;
  `;

  const sizeButtonCode = `
import React, { useState } from 'react';
import { Button, Divider, Flex, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

type SizeType = 'large' | 'middle' | 'small';

const App: React.FC = () => {
  const [size, setSize] = useState<SizeType>('large');
  return (
    <>
      <Radio.Group value={size} onChange={e => setSize(e.target.value)}>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="middle">Default</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <Divider orientation="left">Preview</Divider>
      <Flex gap="small" align="flex-start">
        <Button type="primary" size={size}>
          Primary
        </Button>
        <Button size={size}>Default</Button>
        <Button type="dashed" size={size}>
          Dashed
        </Button>
        <Button danger size={size}>
          Danger
        </Button>
        <Button type="link" size={size}>
          Link
        </Button>
        <Button type="primary" icon={<DownloadOutlined />} size={size} />
        <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
        <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
      </Flex>
    </>
  );
};

export default App;
  `;

  const loadingButtonCode = `
import React, { useState } from 'react';
import { Button, Space, Flex, Tooltip } from 'antd';
import { PoweroffOutlined, SyncOutlined } from '@ant-design/icons';

const App: React.FC = () => {
  const [loadings, setLoadings] = useState<boolean[]>([]);

  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Flex gap="small" wrap="wrap">
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <Button type="primary" icon={<PoweroffOutlined />} loading />
        <Button type="primary" shape="circle" loading />
        <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
          Click me!
        </Button>
        <Button type="primary" icon={<PoweroffOutlined />} loading={loadings[1]} onClick={() => enterLoading(1)}>
          Click me!
        </Button>
        <Button type="primary" shape="circle" loading={loadings[2]} onClick={() => enterLoading(2)} />
      </Flex>

      <Flex gap="small" wrap="wrap">
        <Button loading>
          Loading
        </Button>
        <Button size="small" loading>
          Loading
        </Button>
        <Button icon={<PoweroffOutlined />} loading />
        <Button shape="circle" loading />
        <Button loading={loadings[3]} onClick={() => enterLoading(3)}>
          Click me!
        </Button>
        <Button icon={<PoweroffOutlined />} loading={loadings[4]} onClick={() => enterLoading(4)}>
          Click me!
        </Button>
        <Button shape="circle" loading={loadings[5]} onClick={() => enterLoading(5)} />
      </Flex>
    </Space>
  );
};

export default App;
  `;

  const ghostButtonCode = `
import React from 'react';
import { Button, Space, Divider } from 'antd';

const App: React.FC = () => (
  <div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
    <Space wrap>
      <Button type="primary" ghost>Primary</Button>
      <Button ghost>Default</Button>
      <Button type="dashed" ghost>Dashed</Button>
      <Button type="text" ghost>Text</Button>
      <Button type="link" ghost>Link</Button>
    </Space>
    <Divider />
    <Space wrap>
      <Button type="primary" danger ghost>Danger Primary</Button>
      <Button danger ghost>Danger Default</Button>
      <Button type="dashed" danger ghost>Danger Dashed</Button>
      <Button type="text" danger ghost>Danger Text</Button>
      <Button type="link" danger ghost>Danger Link</Button>
    </Space>
  </div>
);

export default App;
  `;

  const blockButtonCode = `
import React from 'react';
import { Button, Space } from 'antd';

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Button type="primary" block>Primary</Button>
    <Button block>Default</Button>
    <Button type="dashed" block>Dashed</Button>
    <Button danger block>Danger</Button>
    <Button type="link" block>Link</Button>
  </Space>
);

export default App;
  `;

  const disabledButtonCode = `
import React from 'react';
import { Button, Space } from 'antd';

const App: React.FC = () => (
  <Space>
    <Button type="primary" disabled>
      Primary(disabled)
    </Button>
    <Button disabled>
      Default(disabled)
    </Button>
    <Button type="dashed" disabled>
      Dashed(disabled)
    </Button>
    <Button type="text" disabled>
      Text(disabled)
    </Button>
    <Button type="link" disabled>
      Link(disabled)
    </Button>
  </Space>
);

export default App;
  `;

  return (
    <PageLayout
      breadcrumbItems={breadcrumbItems}
      pageTitle="Botón"
    >
      <Title level={3}>Tipos de Botón</Title>
      <Card>
        <Space wrap>
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </Space>
        <SyntaxHighlighter language="typescript" style={monokai}>
          {basicButtonCode}
        </SyntaxHighlighter>
      </Card>

      <Divider />

      <Title level={3}>Botones con Icono</Title>
      <Card>
        <Space wrap>
          <Tooltip title="search">
            <Button type="primary" shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button type="primary" shape="circle">
            A
          </Button>
          <Button type="primary" icon={<SearchOutlined />}>Search</Button>
          <Tooltip title="search">
            <Button shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button icon={<SearchOutlined />}>Search</Button>
          <Tooltip title="search">
            <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button type="dashed" icon={<SearchOutlined />}>Search</Button>
          <Button icon={<DownloadOutlined />} href="/" />
          <Button danger shape="circle" icon={<PoweroffOutlined />} />
          <Button danger icon={<PoweroffOutlined />}>Poweroff</Button>
        </Space>
        <SyntaxHighlighter language="typescript" style={docco}>
          {iconButtonCode}
        </SyntaxHighlighter>
      </Card>

      <Divider />

      <Title level={3}>Tamaño de Botón</Title>
      <Card>
        <Radio.Group value={size} onChange={e => setSize(e.target.value as SizeType)}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="middle">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <Divider orientation="left">Preview</Divider>
        <Flex gap="small" align="flex-start">
          <Button type="primary" size={size}>
            Primary
          </Button>
          <Button size={size}>Default</Button>
          <Button type="dashed" size={size}>
            Dashed
          </Button>
          <Button danger size={size}>
            Danger
          </Button>
          <Button type="link" size={size}>
            Link
          </Button>
          <Button type="primary" icon={<DownloadOutlined />} size={size} />
          <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
          <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
        </Flex>
        <SyntaxHighlighter language="typescript" style={docco}>
          {sizeButtonCode}
        </SyntaxHighlighter>
      </Card>

      <Divider />

      <Title level={3}>Botones de Carga</Title>
      <Card>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Flex gap="small" wrap="wrap">
            <Button type="primary" loading>
              Loading
            </Button>
            <Button type="primary" size="small" loading>
              Loading
            </Button>
            <Button type="primary" icon={<PoweroffOutlined />} loading />
            <Button type="primary" shape="circle" loading />
            <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
              Click me!
            </Button>
            <Button type="primary" icon={<PoweroffOutlined />} loading={loadings[1]} onClick={() => enterLoading(1)}>
              Click me!
            </Button>
            <Button type="primary" shape="circle" loading={loadings[2]} onClick={() => enterLoading(2)} />
          </Flex>

          <Flex gap="small" wrap="wrap">
            <Button loading>
              Loading
            </Button>
            <Button size="small" loading>
              Loading
            </Button>
            <Button icon={<PoweroffOutlined />} loading />
            <Button shape="circle" loading />
            <Button loading={loadings[3]} onClick={() => enterLoading(3)}>
              Click me!
            </Button>
            <Button icon={<PoweroffOutlined />} loading={loadings[4]} onClick={() => enterLoading(4)}>
              Click me!
            </Button>
            <Button shape="circle" loading={loadings[5]} onClick={() => enterLoading(5)} />
          </Flex>
        </Space>
        <SyntaxHighlighter language="typescript" style={docco}>
          {loadingButtonCode}
        </SyntaxHighlighter>
      </Card>

      <Divider />

      <Title level={3}>Botón Fantasma</Title>
      <Card>
        <div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
          <Space wrap>
            <Button type="primary" ghost>Primary</Button>
            <Button ghost>Default</Button>
            <Button type="dashed" ghost>Dashed</Button>
            <Button type="text" ghost>Text</Button>
            <Button type="link" ghost>Link</Button>
          </Space>
          <Divider />
          <Space wrap>
            <Button type="primary" danger ghost>Danger Primary</Button>
            <Button danger ghost>Danger Default</Button>
            <Button type="dashed" danger ghost>Danger Dashed</Button>
            <Button type="text" danger ghost>Danger Text</Button>
            <Button type="link" danger ghost>Danger Link</Button>
          </Space>
        </div>
        <SyntaxHighlighter language="typescript" style={docco}>
          {ghostButtonCode}
        </SyntaxHighlighter>
      </Card>

      <Divider />

      <Title level={3}>Botón de Bloque</Title>
      <Card>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Button type="primary" block>Primary</Button>
          <Button block>Default</Button>
          <Button type="dashed" block>Dashed</Button>
          <Button danger block>Danger</Button>
          <Button type="link" block>Link</Button>
        </Space>
        <SyntaxHighlighter language="typescript" style={docco}>
          {blockButtonCode}
        </SyntaxHighlighter>
      </Card>

      <Divider />

      <Title level={3}>Botones Deshabilitados</Title>
      <Card>
        <Space>
          <Button type="primary" disabled>
            Primary(disabled)
          </Button>
          <Button disabled>
            Default(disabled)
          </Button>
          <Button type="dashed" disabled>
            Dashed(disabled)
          </Button>
          <Button type="text" disabled>
            Text(disabled)
          </Button>
          <Button type="link" disabled>
            Link(disabled)
          </Button>
        </Space>
        <SyntaxHighlighter language="typescript" style={docco}>
          {disabledButtonCode}
        </SyntaxHighlighter>
      </Card>
    </PageLayout>
  );
};

export default ButtonPage;
