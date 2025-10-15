import{R as a}from"./iframe-DgvrvAm1.js";import{S as e}from"./WarningIcon-GIFtDt-5.js";import"./AccordionMenu-D5kEOIT_.js";import"./InputMask-ByTUrUZr.js";import"./Tag-CYhxwFAX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BPNpBEw-.js";const l={title:"Sub Navigation Panel",component:e},t={render:()=>{const[n,r]=a.useState(1);return a.createElement(e,null,a.createElement(e.Item,{"aria-current":n===1?"page":!1,onClick:()=>r(1)},"Tab 1"),a.createElement(e.Item,{"aria-current":n===2?"page":!1,onClick:()=>r(2)},"Tab 2"),a.createElement(e.Item,{"aria-current":n===3?"page":!1,onClick:()=>r(3)},"Tab 3"))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = React.useState(1);
    return <SubNavigation>
        <SubNavigation.Item aria-current={activeTab === 1 ? 'page' : false} onClick={() => setActiveTab(1)}>
          Tab 1
        </SubNavigation.Item>
        <SubNavigation.Item aria-current={activeTab === 2 ? 'page' : false} onClick={() => setActiveTab(2)}>
          Tab 2
        </SubNavigation.Item>
        <SubNavigation.Item aria-current={activeTab === 3 ? 'page' : false} onClick={() => setActiveTab(3)}>
          Tab 3
        </SubNavigation.Item>
      </SubNavigation>;
  }
}`,...t.parameters?.docs?.source}}};const p=["Standard"];export{t as Standard,p as __namedExportsOrder,l as default};
