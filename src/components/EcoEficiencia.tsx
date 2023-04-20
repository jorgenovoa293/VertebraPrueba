import { useState, useReducer } from "react";
import { Tabs } from "antd";
import EcoTabCompany from "./EcoTabCompany";
import { EcoTabContext } from "./context/EcoTabContext";
import { EcoTabReducer, EcoTabReducerActionType } from "./context/EcoTabReducer";

const { TabPane } = Tabs;

const EcoEficiencia = () => {
  const [activeTab, setActiveTab] = useState("tabPane_1");


  const removeTabsEco = (targetKey: any) => {
    console.log(`removeTabsEco ${targetKey}`);

    const indexTabToRemove = tabs.findIndex(
      (pane: any) => pane.key === targetKey
    );
    if (indexTabToRemove !== -1) {
      dispatch({ type: EcoTabReducerActionType.REMOVE_TABS, payload: indexTabToRemove });
      if (indexTabToRemove > 0) {
        setActiveTab(tabs[indexTabToRemove - 1].key);
      }
      else {
        setActiveTab("tabPane_1");
      }
    }
  };

  const addTabsEco = (pane: any) => {
    const pane_find = tabs.find((pane_item: any) => pane_item.key === pane.key);
    if (pane_find === undefined) {
      dispatch({ type: EcoTabReducerActionType.ADD_TABS, payload: pane });
    }
    setActiveTab(pane.key);
  };

  const onChange = (key: any) => {
    setActiveTab(key);
  };

  const [tabs, dispatch] = useReducer(EcoTabReducer, []);

  return (
    <EcoTabContext.Provider
      value={{ tabs, dispatch, setActiveTab }}
    >
      <Tabs
        hideAdd
        onChange={onChange}
        activeKey={activeTab}
        type="editable-card"
        onEdit={removeTabsEco}
        
        
      >
        
        <TabPane tab="COMPANIA" key={"tabPane_1"} closeIcon={<></>} style={{width:"auto", maxWidth:"25%", height:"100vh",  overflow:"auto", borderRight:"2px solid #dedede;"}}>
          <EcoTabCompany onAddTabsEco={addTabsEco} />
        </TabPane>

        {tabs.map((pane: any) => (
          <TabPane tab={pane.title} key={pane.key} closable={true} style={{width:"auto", maxWidth:"25%", height:"100vh",  overflow:"auto", borderRight:"2px solid #dedede;"}}>
            {pane.content}
          </TabPane>
        ))}
        
      </Tabs>
    </EcoTabContext.Provider>
  );
};

export default EcoEficiencia;
