import React, { useState } from 'react';
import { Typography, Breadcrumb, Button, Card, Space, Radio, Flex, Tooltip, Divider } from 'antd';
import { Link } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { SearchOutlined, DownloadOutlined, PoweroffOutlined, SyncOutlined } from '@ant-design/icons';

type SizeType = 'large' | 'middle' | 'small';

const { Title, Paragraph, Text } = Typography;

const ButtonPage: React.FC = () => {
    const [size, setSize] = useState<SizeType>('large');
    const [loadings, setLoadings] = useState<boolean[]>([]);

    const enterLoading = (index: number) => {
        setLoadings(prevLoadings => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });
        setTimeout(() => {
            setLoadings(prevLoadings => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 3000);
    };

    const basicButtonCode = `
    import React from 'react';
    import { Button } from 'antd';

    const App: React.FC = () => (

        <Button type="primary">
            Primary Button
        </Button>

        <Button>
            Default Button
        </Button>

        <Button type="text">
            Text Button
        </Button>

        <Button type="link">
            Link Button
        </Button>
    );

    export default App;
    `;

    const iconButtonCode = `
    import React from 'react';
    import { Button } from 'antd';
    import { SearchOutlined } from '@ant-design/icons';

    const App: React.FC = () => (
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />

        <Button type="primary" shape="circle">
            A
        </Button>

        <Button type="primary" icon={<SearchOutlined />}>
            Search
        </Button>

        <Button shape="circle" icon={<SearchOutlined />} />

        <Button icon={<SearchOutlined />}>
            Search
        </Button>

        <Button icon={<SearchOutlined />} />

        <Button shape="round" icon={<SearchOutlined />} />
    );

    export default App;
    `;

    const iconPositionButtonCode = `
    import React from 'react';
    import { Button } from 'antd';
    import { SearchOutlined } from '@ant-design/icons';

    const App: React.FC = () => (
        <Button icon={<SearchOutlined />} iconPosition="start" >
            Icon Start
        </Button>

        <Button icon={<SearchOutlined />} iconPosition="end">
            Icon End
        </Button>

        <Button loading iconPosition="end">
            Loading End
        </Button>

        <Button icon={<SearchOutlined />}>
            Icon Default
        </Button>
    );

    export default App;
    `;

    const sizeButtonCode = `
import React, { useState } from 'react';
import { Button, Divider, Flex, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const App: React.FC = () => {
  const [size, setSize] = useState<'large' | 'middle' | 'small'>('large');

  const handleSizeChange = (e: any) => {
    setSize(e.target.value);
  };

  return (
    <>
      <Radio.Group value={size} onChange={handleSizeChange}>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="default">Default</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <Divider orientation="left" plain>
        Preview
      </Divider>
      <Flex gap="small" align="flex-start" vertical>
        <Flex gap="small" wrap>
          <Button type="primary" size={size}>Primary</Button>
          <Button size={size}>Default</Button>
          <Button type="dashed" size={size}>Dashed</Button>
        </Flex>
        <Button type="link" size={size}>Link</Button>
        <Flex gap="small" wrap>
          <Button type="primary" icon={<DownloadOutlined />} size={size} />
          <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
          <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
          <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
            Download
          </Button>
          <Button type="primary" icon={<DownloadOutlined />} size={size}>Download</Button>
        </Flex>
      </Flex>
    </>
  );
};

export default App;
  `;

    const loadingButtonCode = `
import React, { useState } from 'react';
import { Button, Flex } from 'antd';
import { PoweroffOutlined, SyncOutlined } from '@ant-design/icons';

const App: React.FC = () => {
  const [loadings, setLoadings] = useState<boolean[]>([]);

  const enterLoading = (index: number) => {
    setLoadings(prevLoadings => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings(prevLoadings => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 3000);
  };

  return (
    <Flex gap="small" vertical>
      <Flex gap="small" align="center" wrap>
        <Button type="primary" loading>Loading</Button>
        <Button type="primary" size="small" loading>Loading</Button>
        <Button type="primary" icon={<PoweroffOutlined />} loading />
        <Button type="primary" loading={{ icon: <SyncOutlined spin /> }}>Loading Icon</Button>
      </Flex>
      <Flex gap="small" wrap>
        <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>Icon Start</Button>
        <Button
          type="primary"
          loading={loadings[2]}
          onClick={() => enterLoading(2)}
          iconPosition="end"
        >Icon End</Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={() => enterLoading(1)}
        >Icon Replace</Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[3]}
          onClick={() => enterLoading(3)}
        />
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[3] && { icon: <SyncOutlined spin /> }}
          onClick={() => enterLoading(3)}
        >Loading Icon</Button>
      </Flex>
    </Flex>
  );
};

export default App;
  `;

    const ghostButtonCode = `
import React from 'react';
import { Button, Flex } from 'antd';

const App: React.FC = () => (
  <div style={{
    background: 'rgba(0, 0, 0, 0.2)',
    padding: '26px 16px 16px',
    borderRadius: '8px',
  }}>
    <Flex wrap gap="small">
      <Button type="primary" ghost>Primary</Button>
      <Button ghost>Default</Button>
      <Button type="dashed" ghost>Dashed</Button>
      <Button type="primary" danger ghost>Danger</Button>
    </Flex>
  </div>
);

export default App;
  `;

    const blockButtonCode = `
import React from 'react';
import { Button, Flex } from 'antd';

const App: React.FC = () => (
  <Flex vertical gap="small" style={{ width: '100%' }}>
    <Button type="primary" block>
        Primary
    </Button>
    <Button block>
        Default
    </Button>
    <Button type="dashed" block>Dashed</Button>
    <Button disabled block>disabled</Button>
    <Button type="text" block>text</Button>
    <Button type="link" block>Link</Button>
  </Flex>
);

export default App;
  `;

    return (
        <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item><Link to="/">Inicio</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to="/design-system">Design System</Link></Breadcrumb.Item>
                <Breadcrumb.Item>Button</Breadcrumb.Item>
            </Breadcrumb>
            <Title level={2}>Button</Title>
            <Paragraph>
                Para disparar una acción.
            </Paragraph>

            <Space direction="vertical" style={{ width: '100%', gap: '24px' }}>

                {/* Sintactic Sugar Button */}
                <Card title="Sintactic Sugar">

                    <Paragraph>
                        Con la propiedad syntactic sugar <Text code>type</Text>, usamos los tipos predefinidos: <Text code>primary</Text>, <Text code>default</Text>, <Text code>text</Text> y <Text code>link</Text>. No usamos el tipo <Text code>dashed</Text> en nuestro sistema ni los atributos <Text code>color</Text> y <Text code>variant</Text>.
                    </Paragraph>

                    <Space direction="vertical" style={{ width: '100%', marginTop: '24px' }}>
                        <Title level={5}>Preview</Title>
                        <Space wrap style={{ backgroundColor: 'lightgray', width: '100%', padding: '40px', borderRadius: '8px' }}>
                            <Button type="primary">Primary Button</Button>
                            <Button>Default Button</Button>
                            <Button type="text">Text Button</Button>
                            <Button type="link">Link Button</Button>
                        </Space>
                    </Space>

                    <Space direction="vertical" style={{ width: '100%', marginTop: '24px' }}>
                        <Title level={5}>Código</Title>
                        <SyntaxHighlighter language="typescript" style={monokai}>
                            {basicButtonCode}
                        </SyntaxHighlighter>
                    </Space>
                </Card>

                {/* Icon */}
                <Card title="Icon" style={{ marginBottom: '24px' }}>

                    <Paragraph>
                        Para agregar un icono, usamos la propiedad <Text code>icon</Text>.
                    </Paragraph>

                    <Space direction="vertical" style={{ width: '100%', marginTop: '24px' }}>
                        <Title level={5}>Preview</Title>
                        <Space wrap style={{ backgroundColor: 'lightgray', width: '100%', padding: '40px', borderRadius: '8px' }}>
                            <Tooltip title="search">
                                <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                            </Tooltip>
                            <Button type="primary" shape="circle">A</Button>
                            <Button type="primary" icon={<SearchOutlined />}>Search</Button>

                            <Tooltip title="search">
                                <Button shape="circle" icon={<SearchOutlined />} />
                            </Tooltip>
                            <Button icon={<SearchOutlined />}>Search</Button>

                            <Button icon={<SearchOutlined />} />

                            <Button shape="round" icon={<SearchOutlined />} />
                        </Space>
                    </Space>

                    <Space direction="vertical" style={{ width: '100%', marginTop: '24px' }}>
                        <Title level={5}>Código</Title>
                        <SyntaxHighlighter language="typescript" style={monokai}>
                            {iconButtonCode}
                        </SyntaxHighlighter>
                    </Space>
                </Card>

                {/* Icon Position */}
                <Card title="Icon Position">

                    <Paragraph>
                        Puedes usar la propiedad <Text code>iconPosition</Text> para colocar el icono al inicio del botón con <Text code>start</Text> o al final con <Text code>end</Text>. Por defecto, el icono se coloca al inicio.
                    </Paragraph>

                    {/* Preview */}
                    <Title level={5}>Preview</Title>
                    <Space wrap style={{ backgroundColor: 'lightgray', width: '100%', padding: '40px', borderRadius: '8px' }}>
                        <Button iconPosition="start" icon={<SearchOutlined />} >Icon Start</Button>
                        <Button iconPosition="end" icon={<SearchOutlined />}>Icon End</Button>
                        <Button loading iconPosition="end">
                            Loading End
                        </Button>
                        <Button icon={<SearchOutlined />}>
                            Icon Default
                        </Button>
                    </Space>

                    {/* Código */}
                    <Title level={5}>Código</Title>
                    <SyntaxHighlighter language="typescript" style={monokai}>
                        {iconPositionButtonCode}
                    </SyntaxHighlighter>
                </Card>

                {/* Size */}
                <Card title="Tamaños de Botón" style={{ marginBottom: '24px' }}>
                    <Radio.Group value={size} onChange={e => setSize(e.target.value as SizeType)}>
                        <Radio.Button value="large">Large</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="small">Small</Radio.Button>
                    </Radio.Group>
                    <Divider orientation="left" plain>
                        Preview
                    </Divider>
                    <Flex gap="small" align="flex-start" vertical>
                        <Flex gap="small" wrap>
                            <Button type="primary" size={size}>Primary</Button>
                            <Button size={size}>Default</Button>
                            <Button type="dashed" size={size}>Dashed</Button>
                        </Flex>
                        <Button type="link" size={size}>Link</Button>
                        <Flex gap="small" wrap>
                            <Button type="primary" icon={<DownloadOutlined />} size={size} />
                            <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
                            <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
                            <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>Download</Button>
                            <Button type="primary" icon={<DownloadOutlined />} size={size}>Download</Button>
                        </Flex>
                    </Flex>
                    <Title level={4} style={{ marginTop: '24px' }}>Código</Title>
                    <SyntaxHighlighter language="typescript" style={monokai}>
                        {sizeButtonCode}
                    </SyntaxHighlighter>
                </Card>

                {/* Loading */}
                <Card title="Botones de Carga" style={{ marginBottom: '24px' }}>
                    <Flex gap="small" vertical>
                        <Flex gap="small" align="center" wrap>
                            <Button type="primary" loading>Loading</Button>
                            <Button type="primary" size="small" loading>Loading</Button>
                            <Button type="primary" icon={<PoweroffOutlined />} loading />
                            <Button type="primary" loading={{ icon: <SyncOutlined spin /> }}>Loading Icon</Button>
                        </Flex>
                        <Flex gap="small" wrap>
                            <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>Icon Start</Button>
                            <Button
                                type="primary"
                                loading={loadings[2]}
                                onClick={() => enterLoading(2)}
                                iconPosition="end"
                            >Icon End</Button>
                            <Button
                                type="primary"
                                icon={<PoweroffOutlined />}
                                loading={loadings[1]}
                                onClick={() => enterLoading(1)}
                            >Icon Replace</Button>
                            <Button
                                type="primary"
                                icon={<PoweroffOutlined />}
                                loading={loadings[3]}
                                onClick={() => enterLoading(3)}
                            />
                            <Button
                                type="primary"
                                icon={<PoweroffOutlined />}
                                loading={loadings[3] && { icon: <SyncOutlined spin /> }}
                                onClick={() => enterLoading(3)}
                            >Loading Icon</Button>
                        </Flex>
                    </Flex>
                    <Title level={4} style={{ marginTop: '24px' }}>Código</Title>
                    <SyntaxHighlighter language="typescript" style={monokai}>
                        {loadingButtonCode}
                    </SyntaxHighlighter>
                </Card>

                {/* Ghost */}
                <Card title="Botones Fantasma" style={{ marginBottom: '24px' }}>
                    <div style={{
                        background: 'rgba(0, 0, 0, 0.2)',
                        padding: '26px 16px 16px',
                        borderRadius: '8px',
                    }}>
                        <Flex wrap gap="small">
                            <Button type="primary" ghost>Primary</Button>
                            <Button ghost>Default</Button>
                            <Button type="dashed" ghost>Dashed</Button>
                            <Button type="primary" danger ghost>Danger</Button>
                        </Flex>
                    </div>
                    <Title level={4} style={{ marginTop: '24px' }}>Código</Title>
                    <SyntaxHighlighter language="typescript" style={monokai}>
                        {ghostButtonCode}
                    </SyntaxHighlighter>
                </Card>

                {/* Block */}
                <Card title="Botones de Bloque" style={{ marginBottom: '24px' }}>
                    <Flex vertical gap="small" style={{ width: '100%' }}>
                        <Button type="primary" block>Primary</Button>
                        <Button block>Default</Button>
                        <Button type="dashed" block>Dashed</Button>
                        <Button disabled block>disabled</Button>
                        <Button type="text" block>text</Button>
                        <Button type="link" block>Link</Button>
                    </Flex>
                    <Title level={4} style={{ marginTop: '24px' }}>Código</Title>
                    <SyntaxHighlighter language="typescript" style={monokai}>
                        {blockButtonCode}
                    </SyntaxHighlighter>
                </Card>

            </Space>

        </div >
    );
};

export default ButtonPage;
