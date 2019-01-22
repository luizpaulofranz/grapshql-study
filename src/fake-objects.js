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

const FakeFixedBugs3 = 
{
  "id": "5000",
  "description": "Passa a fazer qualquer coisa"
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

const FakeNewFeatures3 = 
{
  "id": "6000",
  "description": "Nova rotina de qualquer coisa"
}

const FakeAvailableVersion1 =
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

const FakeAvailableVersion2 =
{
  "version": "1.0.0.1",
  "versionInfo": {
    "minVersion": "2.22.00.000",
    "hash": "5456684FC13B42B3BF65C2DCBC651323",
    "date": "01/02/2019",
    "fixedBugs": [
      FakeFixedBugs3
    ],
    "newFeatures": [
      FakeNewFeatures3
    ]
  }
};

const FakeAvailableVersionList =
{
  "modulePath": "Administrador",
  "moduleName": "Sievo-BETA",
  "availableVersionList":  [
    FakeAvailableVersion1,
    FakeAvailableVersion2
  ]
};


module.exports = FakeAvailableVersionList;
