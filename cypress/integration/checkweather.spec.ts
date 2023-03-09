/// <reference types="cypress" />

import { assert } from "chai";

let getRainPercentageString;
let getRainNo;
var dateNow = new Date();  
var threeDaysFutureDate = new Date(dateNow.setDate(dateNow.getDate() + 3)).toLocaleDateString("en-US",{timeZone:"Australia/Sydney"});

describe('weather test', () => {
    it('Get the percentage rain number after 3 days in Sydney', () => {

     cy.visit('http://www.bom.gov.au');
     cy.get('a[href="/nsw/forecasts/sydney.shtml"]').click(); 

     cy.get('div#content').children().eq(7).find('em.pop').then(($rain) => {

        getRainPercentageString = $rain.text();
        getRainNo = parseInt(getRainPercentageString.substr(0,2));
       
     })
    })

    it("The percentage rain number test will fail if it is greater then 50% ", () => {


           cy.log("Print furure date  ======> ", threeDaysFutureDate);
           cy.log("Print rain chance ======> ", getRainNo);

         if (getRainNo < 50)
         {
            assert.isTrue;
        
         } else
         {
            assert.isFalse("Looks like it will be a rainy day on " + threeDaysFutureDate);
         }
        });

})