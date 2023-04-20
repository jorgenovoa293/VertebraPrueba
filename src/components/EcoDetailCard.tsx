import { Row, Col, Typography, Card, Tooltip } from "antd";

interface ecoDetailCard {
    record: {
        id: String;
        name: String;
        idCompany: number;
        base: any;
        groups?: number;
        shops?: number;
        accounts?: number;
    };
}


const generateIcon = (title: string, icon: string, value: any) => {
    return <Tooltip title={title} color="#009432">
        <Col
            span={8}
            style={{ display: "grid", justifyContent: "center" }}
        >
            <Typography.Text>
                <span className="material-icons" style={{ color: "#009432" }}>
                    {icon}
                </span>
            </Typography.Text>

            <Typography.Text
                style={{ fontSize: "0.7rem", textAlign: "center" }}
            >
                {value}
            </Typography.Text>
        </Col>
    </Tooltip>
}

const EcoDetailCard = ({ record }: ecoDetailCard) => {
    return (
        <Card title={record.name} bordered={false} style={{ width: 300, margin: 5 }}>
            <Row>
                {record?.accounts !== undefined ? (
                    <>{generateIcon('accounts', 'receipt_long', record?.accounts)}</>
                ) : null}
                {record?.shops !== undefined ? (
                    <>{generateIcon('shops', 'storefront', record?.shops)}</>
                ) : null}
                {record?.groups !== undefined ? (
                    <>{generateIcon('groups', 'groups', record?.groups)}</>
                ) : null}
                {record?.base !== undefined ? (
                    <>
                        {generateIcon(record?.base[0].name, 'lightbulb', record?.base[0].percent)}
                        {generateIcon(record?.base[1].name, 'candlestick_chart', record?.base[1].percent)}
                        {generateIcon(record?.base[2].name, 'bar_chart', record?.base[2].percent)}
                        {generateIcon(record?.base[3].name, 'battery_charging_full', record?.base[3].percent)}
                    </>
                ) : null}
            </Row>
        </Card>

    );
};
export default EcoDetailCard;
