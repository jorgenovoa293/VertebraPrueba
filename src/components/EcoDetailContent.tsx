import accounts from '../db/Account.json'
import groups from '../db/Groups.json'
import shops from '../db/Shops.json'
import error from '../images/404error.png'

import EcoDetailCard from './EcoDetailCard'

interface ecoGroupContent {
    idCompany: Number;
    detailType: string;
}

export enum EcoTEcoDetailContentType {
    GROUPS = "GROUPS",
    SHOPS = "SHOPS",
    ACCOUNTS = "ACCOUNTS"
}

const EcoDetailContent = ({ idCompany, detailType }: ecoGroupContent) => {
    let dataFilter: any[] = [];

    if (detailType === EcoTEcoDetailContentType.GROUPS) {
        dataFilter = groups.data.filter((record) => (record.idCompany === idCompany))
    }
    if (detailType === EcoTEcoDetailContentType.SHOPS) {
        dataFilter = shops.data.filter((record) => (record.idCompany === idCompany))
    }
    if (detailType === EcoTEcoDetailContentType.ACCOUNTS) {
        dataFilter = accounts.data.filter((record) => (record.idCompany === idCompany))
    }


    let content: any = <div style={{position:"fixed", top:"20%", left:"35%"}}>
        <img src={error} alt="404error" style={{width:"500px"}}/>
        <h1 style={{textAlign:"center"}}>404 </h1>
        <p style={{textAlign:"center"}}> No se encontraron {detailType}</p>
        
        </div>;

    if (dataFilter.length > 0) {
        content = dataFilter.map((record) => {
            return <EcoDetailCard record={record} key={`ecoCard_group_${record.id}`}></EcoDetailCard>
        })
    }

    return <>
        {content}
    </>


};

export default EcoDetailContent;