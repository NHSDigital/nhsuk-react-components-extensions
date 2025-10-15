import{R as e}from"./iframe-DgvrvAm1.js";import{T as a}from"./WarningIcon-GIFtDt-5.js";import"./AccordionMenu-D5kEOIT_.js";import"./InputMask-ByTUrUZr.js";import"./Tag-CYhxwFAX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BPNpBEw-.js";const S={title:"TabSet",component:a},t={render:()=>e.createElement(e.Fragment,null,e.createElement(a,null,e.createElement(a.Tab,null,"Overview"),e.createElement(a.Tab,{active:!0},"Demographics"),e.createElement(a.Tab,null,"Clinicals"),e.createElement(a.Tab,null,"Documents")),e.createElement("br",null))},n={render:()=>e.createElement(e.Fragment,null,e.createElement(a,null,e.createElement(a.Tab,null,"Overview"),e.createElement(a.Tab,{active:!0},"Demographics"),e.createElement(a.Tab,{disabled:!0},"Clinicals"),e.createElement(a.Tab,null,"Documents")),e.createElement("br",null))},r={render:()=>e.createElement(e.Fragment,null,e.createElement(a,null,e.createElement(a.Tab,null,"Overview"),e.createElement(a.Tab,{active:!0},"Demographics"),e.createElement(a.Tab,{empty:!0},"Clinicals"),e.createElement(a.Tab,null,"Documents")),e.createElement("br",null))},b={render:()=>e.createElement(e.Fragment,null,e.createElement(a,null,e.createElement(a.Tab,{style:{maxWidth:200}},"Overview"),e.createElement(a.Tab,{style:{minWidth:450}},"Demographics"),e.createElement(a.Tab,{style:{flexGrow:2}},"Clinicals"),e.createElement(a.Tab,{style:{flexGrow:.5}},"Documents"),e.createElement(a.Tab,null,"Settings")),e.createElement("br",null))};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <TabSet>
        <TabSet.Tab>Overview</TabSet.Tab>
        <TabSet.Tab active>Demographics</TabSet.Tab>
        <TabSet.Tab>Clinicals</TabSet.Tab>
        <TabSet.Tab>Documents</TabSet.Tab>
      </TabSet>
      <br />
    </>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <TabSet>
        <TabSet.Tab>Overview</TabSet.Tab>
        <TabSet.Tab active>Demographics</TabSet.Tab>
        <TabSet.Tab disabled>Clinicals</TabSet.Tab>
        <TabSet.Tab>Documents</TabSet.Tab>
      </TabSet>
      <br />
    </>
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <TabSet>
        <TabSet.Tab>Overview</TabSet.Tab>
        <TabSet.Tab active>Demographics</TabSet.Tab>
        <TabSet.Tab empty>Clinicals</TabSet.Tab>
        <TabSet.Tab>Documents</TabSet.Tab>
      </TabSet>
      <br />
    </>
}`,...r.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <TabSet>
        <TabSet.Tab style={{
        maxWidth: 200
      }}>Overview</TabSet.Tab>
        <TabSet.Tab style={{
        minWidth: 450
      }}>Demographics</TabSet.Tab>
        <TabSet.Tab style={{
        flexGrow: 2
      }}>Clinicals</TabSet.Tab>
        <TabSet.Tab style={{
        flexGrow: 0.5
      }}>Documents</TabSet.Tab>
        <TabSet.Tab>Settings</TabSet.Tab>
      </TabSet>
      <br />
    </>
}`,...b.parameters?.docs?.source}}};const u=["Standard","WithDisabledTab","WithEmptyTab","WithDifferentSizes"];export{t as Standard,b as WithDifferentSizes,n as WithDisabledTab,r as WithEmptyTab,u as __namedExportsOrder,S as default};
