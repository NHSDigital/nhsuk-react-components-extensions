import{R as e,r as l}from"./iframe-DgvrvAm1.js";import{A as n}from"./AccordionMenu-D5kEOIT_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BPNpBEw-.js";const s={title:"Accordion Menu",component:n},o={render:()=>e.createElement(n,{className:"accordion-demo"},e.createElement(n.Section,{heading:"Greetings!"},e.createElement(n.Link,null,"Hello!"),e.createElement(n.Link,null,"Hello!")),e.createElement(n.Section,{heading:"Salutations!"},e.createElement(n.Link,null,"Goodbye!"),e.createElement(n.Link,null,"Goodbye!")),e.createElement(n.Section,{heading:"Greetings!"},e.createElement(n.Link,null,"Hello!"),e.createElement(n.Link,null,"Hello!")),e.createElement(n.Section,{heading:"Salutations!"},e.createElement(n.Link,null,"Goodbye!"),e.createElement(n.Link,null,"Goodbye!")))},c={render:()=>e.createElement(n,{className:"accordion-demo"},e.createElement(n.Section,{heading:"Greetings!",defaultOpen:!0},e.createElement(n.Link,null,"Hello!"),e.createElement(n.Link,null,"Hello!")),e.createElement(n.Section,{heading:"Salutations!"},e.createElement(n.Link,null,"Goodbye!"),e.createElement(n.Link,null,"Goodbye!")),e.createElement(n.Section,{heading:"Greetings!"},e.createElement(n.Link,null,"Hello!"),e.createElement(n.Link,null,"Hello!")),e.createElement(n.Section,{heading:"Salutations!"},e.createElement(n.Link,null,"Goodbye!"),e.createElement(n.Link,null,"Goodbye!")))},k=()=>{const[i,t]=l.useState(!1);return e.createElement(e.Fragment,null,e.createElement("label",{htmlFor:"open-accordion"},e.createElement("input",{type:"checkbox",id:"open-accordion",onChange:r=>t(r.target.checked)})," ","Open Accordion Section"),e.createElement(n,{className:"accordion-demo"},e.createElement(n.Section,{heading:"Greetings!",open:i},e.createElement(n.Link,null,"Hello!"),e.createElement(n.Link,null,"Hello!")),e.createElement(n.Section,{heading:"Salutations!"},e.createElement(n.Link,null,"Goodbye!"),e.createElement(n.Link,null,"Goodbye!")),e.createElement(n.Section,{heading:"Greetings!"},e.createElement(n.Link,null,"Hello!"),e.createElement(n.Link,null,"Hello!")),e.createElement(n.Section,{heading:"Salutations!"},e.createElement(n.Link,null,"Goodbye!"),e.createElement(n.Link,null,"Goodbye!"))))};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <AccordionMenu className="accordion-demo">
      <AccordionMenu.Section heading="Greetings!">
        <AccordionMenu.Link>Hello!</AccordionMenu.Link>
        <AccordionMenu.Link>Hello!</AccordionMenu.Link>
      </AccordionMenu.Section>
      <AccordionMenu.Section heading="Salutations!">
        <AccordionMenu.Link>Goodbye!</AccordionMenu.Link>
        <AccordionMenu.Link>Goodbye!</AccordionMenu.Link>
      </AccordionMenu.Section>
      <AccordionMenu.Section heading="Greetings!">
        <AccordionMenu.Link>Hello!</AccordionMenu.Link>
        <AccordionMenu.Link>Hello!</AccordionMenu.Link>
      </AccordionMenu.Section>
      <AccordionMenu.Section heading="Salutations!">
        <AccordionMenu.Link>Goodbye!</AccordionMenu.Link>
        <AccordionMenu.Link>Goodbye!</AccordionMenu.Link>
      </AccordionMenu.Section>
    </AccordionMenu>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <AccordionMenu className="accordion-demo">
      <AccordionMenu.Section heading="Greetings!" defaultOpen>
        <AccordionMenu.Link>Hello!</AccordionMenu.Link>
        <AccordionMenu.Link>Hello!</AccordionMenu.Link>
      </AccordionMenu.Section>
      <AccordionMenu.Section heading="Salutations!">
        <AccordionMenu.Link>Goodbye!</AccordionMenu.Link>
        <AccordionMenu.Link>Goodbye!</AccordionMenu.Link>
      </AccordionMenu.Section>
      <AccordionMenu.Section heading="Greetings!">
        <AccordionMenu.Link>Hello!</AccordionMenu.Link>
        <AccordionMenu.Link>Hello!</AccordionMenu.Link>
      </AccordionMenu.Section>
      <AccordionMenu.Section heading="Salutations!">
        <AccordionMenu.Link>Goodbye!</AccordionMenu.Link>
        <AccordionMenu.Link>Goodbye!</AccordionMenu.Link>
      </AccordionMenu.Section>
    </AccordionMenu>
}`,...c.parameters?.docs?.source}}};const A=["Standard","WithDefaultOpen","ProgrammaticControl"];export{k as ProgrammaticControl,o as Standard,c as WithDefaultOpen,A as __namedExportsOrder,s as default};
