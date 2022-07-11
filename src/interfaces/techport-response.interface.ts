export interface ProjectMember {
  "contactId": number;
  "firstName": string;
  "lastName": string;
  "fullName": string;
  "fullNameInverted": string;
  "middleInitial": string;
  "primaryEmail": string;
  "publicEmail": boolean;
  "nacontact": boolean;
}

export interface ProjectFile {
  "fileExtension": string,
  "fileId": number,
  "fileName": string,
  "fileSize": number,
  "objectId": number,
  "objectType": {
    "lkuCodeId": number,
    "code": string,
    "description": string,
    "lkuCodeTypeId": number,
    "lkuCodeType": {
      "codeType": string,
      "description": string
    }
  },
  "objectTypeId": number,
  "fileSizeString": string
}

export interface TechPortProjectResponse {
  "project": {
    "projectId": number,
    "title": string,
    "primaryTaxonomyNodes": {
      "taxonomyNodeId": number,
      "taxonomyRootId": number,
      "parentNodeId": number,
      "level": number,
      "code": string,
      "title": string,
      "definition": string
      "exampleTechnologies": string,
      "hasChildren": false,
      "hasInteriorContent": true,
    }[],
    "startTrl": number,
    "currentTrl": number,
    "endTrl": number,
    "benefits": string
    "description": string
    "destinations": {
      "lkuCodeId": number,
      "code": string,
      "description": string,
      "lkuCodeTypeId": number,
      "lkuCodeType": {
        "codeType": string,
        "description": string,
      }
    }[],
    "startYear": number,
    "startMonth": number,
    "endYear": number,
    "endMonth": number,
    "statusDescription": string,
    "principalInvestigators": ProjectMember[],
    "programDirectors": ProjectMember[],
    "programExecutives": ProjectMember[],
    "programManagers": ProjectMember[],
    "libraryItems":   {
      "file": ProjectFile,
      "files": ProjectFile[],
      "id": number,
      "title": string,
      "description": string,
      "libraryItemTypeId": number,
      "projectId": number,
      "primary": boolean,
      "publishedDateString": string,
      "contentType": {
        "lkuCodeId": number,
        "code": string,
        "description": string,
        "lkuCodeTypeId": number,
        "lkuCodeType": {
          "codeType":  string,
          "description": string
        }
      }
    }[],
    "transitions": {
      "transitionId": number,
      "projectId": number,
      "transitionDate": string,
      "path": string,
      "details": string,
      "closeoutDocuments": [{
        "title": string,
        "file": {
          "fileExtension": string,
          "fileId": number,
          "fileName": string,
          "fileSize": number,
          "objectId": number,
          "objectType": {
            "lkuCodeId": number,
            "code": string,
            "description": string,
            "lkuCodeTypeId": number,
            "lkuCodeType": {
              "codeType": string,
              "description": string
            }
          },
          "fileSizeString": string
        },
        "transitionId": number,
        "fileId": number
      }],
      "infoText": string,
      "infoTextExtra": string,
      "dateText": string
    }[],
    "primaryImage": {
      "file": {
        "fileExtension": string,
        "fileId": number,
        "fileSizeString": string
      },
      "id": number,
      "description": string,
      "projectId": number,
      "publishedDateString": string
    },
    "responsibleMd": {
      "acronym": string,
      "canUserEdit": boolean,
      "city": string,
      "external": boolean,
      "linkCount": number,
      "organizationId": number,
      "organizationName": string,
      "organizationType": string,
      "naorganization": false,
      "organizationTypePretty": string
    },
    "program": {
      "acronym": string,
      "active": boolean,
      "description": string
      "programId": number,
      "responsibleMd": {
        "acronym": string,
        "canUserEdit": boolean,
        "city": string,
        "external": boolean,
        "linkCount": number,
        "organizationId": number,
        "organizationName": string,
        "organizationType": string,
        "naorganization": boolean,
        "organizationTypePretty": string
      },
      "responsibleMdId": number,
      "stockImageFileId": number,
      "title": string
    },
    "leadOrganization": {
      "canUserEdit": boolean,
      "city": string,
      "country": {
        "abbreviation": string,
        "countryId": number,
        "name": string
      },
      "countryId": number,
      "external": true,
      "linkCount": number,
      "organizationId": number,
      "organizationName": string,
      "organizationType": string,
      "stateTerritory": {
        "abbreviation": string,
        "country": {
          "abbreviation": string,
          "countryId": number,
          "name": string
        },
        "countryId": number,
        "name": string,
        "stateTerritoryId": number
      },
      "stateTerritoryId": number,
      "msiData": {},
      "setAsideData": string[],
      "ein": string,
      "naorganization": false,
      "organizationTypePretty": string
    },
    "supportingOrganizations": {
      "acronym": string,
      "canUserEdit": boolean,
      "city": string,
      "country": {
        "abbreviation": string,
        "countryId": number,
        "name": string
      },
      "countryId": number,
      "external": boolean,
      "linkCount": number,
      "organizationId": number,
      "organizationName": string,
      "organizationType": string,
      "stateTerritory": {
        "abbreviation": string,
        "country": {
          "abbreviation": string,
          "countryId": number,
          "name": string
        },
        "countryId": number,
        "name": string,
        "stateTerritoryId": number
      },
      "stateTerritoryId": number,
      "naorganization": boolean,
      "organizationTypePretty": string
    }[],
    "statesWithWork": {
      "abbreviation": string,
      "country": {
        "abbreviation": string,
        "countryId": number,
        "name": string
      },
      "countryId": number,
      "name": string,
      "stateTerritoryId": number
    }[],
    "lastUpdated": string,
    "releaseStatusString": string,
    "endDateString": string,
    "startDateString": string
  }
}

export interface TechPortProjectListElement {
  "projectId": number,
"lastUpdated": string,
}
export interface TechPortProjectsResponse {
  "projects": TechPortProjectListElement[],
}

export interface TechPortProjectsQuery {
  offset: number;
  limit: number;
}