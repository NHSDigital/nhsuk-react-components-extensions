# FileSelect

### Import

```js
import FileSelect from "components/FileSelect/FileSelect";
```

### Usage

Simple

```jsx
import FileSelect from "components/FileSelect/FileSelect";

<FileSelect>Upload a document</FileSelect>;
```

Input with hint text

```jsx
import FileSelect from "components/FileSelect/FileSelect";

<FileSelect
  accept=".jpg, .png"
  hint={["This can be in either JPG or PNG format."]}
>
  Upload a photo
</FileSelect>;
```

Input with hint & error text

```jsx
import FileSelect from "components/FileSelect/FileSelect";

<FileSelect
  accept=".jpg, .png"
  hint="This can be in either JPG or PNG format."
  error="The selected file must be a .jpg or a .png."
>
  Upload a photo
</FileSelect>;
```

### Properties

| Prop       | Required | Default     | Type   | Description         |
| :--------- | :------- | :---------- | :----- | :------------------ |
| `children` | true     | ``````      | node   |
| `hint`     |          | `undefined` | string | Optional hint text  |
| `error`    |          | `undefined` | string | Optional error text |
