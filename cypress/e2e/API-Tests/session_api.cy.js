/// <reference types="cypress" />

context('Session Requests', () => {
  
    // Manage HTTP requests in your app
  
    it('cy.request() - make an XHR request', () => {
      // https://on.cypress.io/request

        cy.request({
            method: 'POST',
            url: 'https://test-eldon/CoreQuoteServices/api/session/motor/create?Style=0', // baseUrl is prepend to URL
            headers: {
                'Cache-Control': 'no-cache',
                'X-Requested-By': 'samatha',
                'Accept': 'application/json'
            },
        })
        .then((response) => {
            console.log(response)
            expect(response.status).to.eq(200)
        })
    })

  })
  