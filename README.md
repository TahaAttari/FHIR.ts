# FHIR TypeScript / JavaScript Library For Front End Applications

The Following Library contains classes and interfaces for [FHIR](https://www.hl7.org/fhir/) versions.

* R3 is intended for projects using FHIR [R3](https://www.hl7.org/fhir/stu3/).
* R4 is intended for projects using FHIR  [R4](http://hl7.org/fhir/index.html). The definitions are generated using [Swagger Codegen](https://github.com/swagger-api/swagger-codegen).\


**Note**: This library does not include all FHIR TypeScript definitions for R3. The idea is to collaborate and expand this library.

# Installation

Using npm:
```shell
$ npm i @smile-cdr/fhirts
```

# Usage

```js
// if using FHIR R3 
import { fhirR3 } from '@smile-cdr/fhirts';
let practitioner = new fhirR3.Practitioner();

// if using FHIR R4 classes
import { fhirR4 } from '@smile-cdr/fhirts';
let encounter = new fhirR4.Encounter();

// if using FHIR R4 interfaces
import { IfhirR4 } from '@smile-cdr/fhirts';
let patient: IfhirR4.Patient = {
    resourceType: 'Patient'
};
```

# Dev Process

1. Create an issue.
2. Create a branch related to the issue.
3. Make necessary changes and upgrade library version in `package.json` file. This is a must as npm doesn't allow publish on same version.
4. Push changes & create a Pull Request.


