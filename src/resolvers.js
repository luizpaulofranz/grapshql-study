const constants = require('./fake-objects');


const FakeFixedBugs1 = 
{
  "id": "1000",
  "description": "Passaa a fazer o cálculo correto das vendas"
}

const FakeFixedBugs2 = 
{
  "id": "2000",
  "description": "Passa a trocar o foco corretamente no cadastro de clientes"
}

const FakeNewFeatures1 = 
{
  "id": "3000",
  "description": "Novo programa de cadastro de certificado digital"
}

const FakeNewFeatures2 = 
{
  "id": "4000",
  "description": "Novo serviço de backup de bases de dados"
}

const FakeAvailableVersions =
{
  "version": "1.0.0.0",
  "versionInfo": {
    "minVersion": "2.22.00.000",
    "hash": "5456684FC13B42B3BF65C2DCBC651323",
    "date": "01/01/2019",
    "fixedBugs": [
      FakeFixedBugs1,
      FakeFixedBugs2
    ],
    "newFeatures": [
      FakeNewFeatures1,
      FakeNewFeatures2
    ]
  }
};


//onsole.log(JSON.stringify(FakeAvailableVersions));
console.log(JSON.stringify(FakeAvailableVersions));

module.exports = {
  Query: {
    getFakeAvailableVersions: () => FakeAvailableVersions
  }

};
