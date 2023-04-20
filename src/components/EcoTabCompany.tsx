import { Dropdown } from 'antd';

import companies from '../db/Company.json'
import EcoCard from './EcoCard'
import EcoDetailContent, { EcoTEcoDetailContentType } from './EcoDetailContent'


interface company {
    id: number;
    groups: number;
    shops: number;
    accounts: number;
    name: string;
    base: {
        name: string;
        percent: number;
        color: string;
    }[];
}

interface ecoTabCompany {
    onAddTabsEco: (pane: any) => void;
}


const EcoTabCompany = ({ onAddTabsEco }: ecoTabCompany) => {

    const addGroupsTab = (record: company) => {
        onAddTabsEco({
            title: `${record.name} - Grupos`,
            key: `tabpane_groups_company_${record.id}`,
            content: <EcoDetailContent idCompany={record.id} detailType={EcoTEcoDetailContentType.GROUPS} />
        })
    };

    const addShopsTab = (record: company) => {
        onAddTabsEco({
            title: `${record.name} - Tiendas`,
            key: `tabpane_shops_company_${record.id}`,
            content: <EcoDetailContent idCompany={record.id} detailType={EcoTEcoDetailContentType.SHOPS} />
        })
    };

    const addAccountsTab = (record: company) => {
        onAddTabsEco({
            title: `${record.name} - Cuentas`,
            key: `tabpane_accounts_company_${record.id}`,
            content: <EcoDetailContent idCompany={record.id} detailType={EcoTEcoDetailContentType.ACCOUNTS} />
        })
    };

    const dataToDisplay = companies.data.map(record => {
        return <Dropdown menu={{
            items: [
                {
                    key: '1',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" onClick={() => { addGroupsTab(record) }} >
                            Grupos
                        </a>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" onClick={() => { addShopsTab(record) }} >
                            Tiendas
                        </a>
                    ),
                },
                {
                    key: '3',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" onClick={() => { addAccountsTab(record) }} >
                            Cuentas
                        </a>
                    ),
                },
            ]
        }} key={`drp_${record.id}`} trigger={['contextMenu']}>
            <div>
                <EcoCard record={{ account: undefined, ...record }} key={`ecoCard_${record.id}`} />
            </div>
        </Dropdown>
    });


    return <>
        {dataToDisplay}
    </>
}

export default EcoTabCompany