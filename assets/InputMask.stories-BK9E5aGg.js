import{R as a}from"./iframe-DgvrvAm1.js";import{I as e}from"./InputMask-ByTUrUZr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BPNpBEw-.js";const k={title:"InputMask",component:e},s={render:()=>a.createElement("div",{className:"input-mask-demo"},a.createElement("label",{htmlFor:"ni-number"},"National Insurance Number"),a.createElement(e,{id:"ni-number",name:"ni-number",mask:"** ## ## ## *",formatChars:{"#":"[0-9]","*":"[A-Za-z]"},maskChar:"",placeholder:"QQ 12 34 56 C",alwaysShowMask:!1}))},r={render:()=>a.createElement("div",{className:"input-mask-demo"},a.createElement("label",{htmlFor:"nhs-number"},"NHS Number"),a.createElement(e,{id:"nhs-number",name:"nhs-number",mask:"### ### ####",formatChars:{"#":"[0-9]"},maskChar:"",placeholder:"123 456 7890",alwaysShowMask:!1}))},l={render:()=>a.createElement("div",{className:"input-mask-demo"},a.createElement("label",{htmlFor:"phone"},"Phone Number"),a.createElement(e,{id:"phone",name:"phone",mask:"+44 #### ### ###",formatChars:{"#":"[0-9]"},maskChar:"",placeholder:"+44 1234 567 890",alwaysShowMask:!1}))},m={render:()=>a.createElement("div",{className:"input-mask-demo"},a.createElement("label",{htmlFor:"dob"},"Date of Birth"),a.createElement(e,{id:"dob",name:"dob",mask:"##/##/####",formatChars:{"#":"[0-9]"},maskChar:"",placeholder:"DD/MM/YYYY",alwaysShowMask:!1,disabled:!1}))},t={render:()=>a.createElement("div",{className:"input-mask-demo"},a.createElement("label",{htmlFor:"postcode"},"Postcode"),a.createElement(e,{id:"postcode",name:"postcode",mask:"*** ***",formatChars:{"*":"[A-Za-z0-9]"},maskChar:"",placeholder:"SW1A 1AA",alwaysShowMask:!1}))},o={render:()=>a.createElement("div",{className:"input-mask-demo"},a.createElement("label",{htmlFor:"always-mask"},"Always Show Mask"),a.createElement(e,{id:"always-mask",name:"always-mask",mask:"##/##/####",formatChars:{"#":"[0-9]"},maskChar:"_",placeholder:"DD/MM/YYYY",alwaysShowMask:!0}))},d={render:()=>a.createElement("div",{className:"input-mask-demo"},a.createElement("label",{htmlFor:"default-value"},"With Default Value"),a.createElement(e,{id:"default-value",name:"default-value",mask:"### ### ####",formatChars:{"#":"[0-9]"},maskChar:"",defaultValue:"1234567890",placeholder:"123 456 7890",alwaysShowMask:!1}))},n={render:()=>a.createElement("div",{className:"input-mask-demo"},a.createElement("label",{htmlFor:"disabled"},"Disabled Input"),a.createElement(e,{id:"disabled",name:"disabled",mask:"### ### ####",formatChars:{"#":"[0-9]"},maskChar:"",defaultValue:"1234567890",placeholder:"123 456 7890",disabled:!0,alwaysShowMask:!1}))},c={render:()=>a.createElement("div",{className:"input-mask-demo"},a.createElement("label",{htmlFor:"readonly"},"Read Only Input"),a.createElement(e,{id:"readonly",name:"readonly",mask:"### ### ####",formatChars:{"#":"[0-9]"},maskChar:"",defaultValue:"1234567890",placeholder:"123 456 7890",readOnly:!0,alwaysShowMask:!1}))};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="input-mask-demo">
      <label htmlFor="ni-number">National Insurance Number</label>
      <InputMask id="ni-number" name="ni-number" mask="** ## ## ## *" formatChars={{
      '#': '[0-9]',
      '*': '[A-Za-z]'
    }} maskChar="" placeholder="QQ 12 34 56 C" alwaysShowMask={false} />
    </div>
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="input-mask-demo">
      <label htmlFor="nhs-number">NHS Number</label>
      <InputMask id="nhs-number" name="nhs-number" mask="### ### ####" formatChars={{
      '#': '[0-9]'
    }} maskChar="" placeholder="123 456 7890" alwaysShowMask={false} />
    </div>
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="input-mask-demo">
      <label htmlFor="phone">Phone Number</label>
      <InputMask id="phone" name="phone" mask="+44 #### ### ###" formatChars={{
      '#': '[0-9]'
    }} maskChar="" placeholder="+44 1234 567 890" alwaysShowMask={false} />
    </div>
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="input-mask-demo">
      <label htmlFor="dob">Date of Birth</label>
      <InputMask id="dob" name="dob" mask="##/##/####" formatChars={{
      '#': '[0-9]'
    }} maskChar="" placeholder="DD/MM/YYYY" alwaysShowMask={false} disabled={false} />
    </div>
}`,...m.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="input-mask-demo">
      <label htmlFor="postcode">Postcode</label>
      <InputMask id="postcode" name="postcode" mask="*** ***" formatChars={{
      '*': '[A-Za-z0-9]'
    }} maskChar="" placeholder="SW1A 1AA" alwaysShowMask={false} />
    </div>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="input-mask-demo">
      <label htmlFor="always-mask">Always Show Mask</label>
      <InputMask id="always-mask" name="always-mask" mask="##/##/####" formatChars={{
      '#': '[0-9]'
    }} maskChar="_" placeholder="DD/MM/YYYY" alwaysShowMask={true} />
    </div>
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="input-mask-demo">
      <label htmlFor="default-value">With Default Value</label>
      <InputMask id="default-value" name="default-value" mask="### ### ####" formatChars={{
      '#': '[0-9]'
    }} maskChar="" defaultValue="1234567890" placeholder="123 456 7890" alwaysShowMask={false} />
    </div>
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="input-mask-demo">
      <label htmlFor="disabled">Disabled Input</label>
      <InputMask id="disabled" name="disabled" mask="### ### ####" formatChars={{
      '#': '[0-9]'
    }} maskChar="" defaultValue="1234567890" placeholder="123 456 7890" disabled={true} alwaysShowMask={false} />
    </div>
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="input-mask-demo">
      <label htmlFor="readonly">Read Only Input</label>
      <InputMask id="readonly" name="readonly" mask="### ### ####" formatChars={{
      '#': '[0-9]'
    }} maskChar="" defaultValue="1234567890" placeholder="123 456 7890" readOnly={true} alwaysShowMask={false} />
    </div>
}`,...c.parameters?.docs?.source}}};const b=["NationalInsuranceNumber","NHSNumber","PhoneNumber","DateOfBirth","Postcode","AlwaysShowMask","WithDefaultValue","Disabled","ReadOnly"];export{o as AlwaysShowMask,m as DateOfBirth,n as Disabled,r as NHSNumber,s as NationalInsuranceNumber,l as PhoneNumber,t as Postcode,c as ReadOnly,d as WithDefaultValue,b as __namedExportsOrder,k as default};
