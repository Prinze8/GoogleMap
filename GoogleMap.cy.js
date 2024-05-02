import GoogleMap from "../PageObject/GoogleMap"

describe('Google Map', () => {
    
    it('show location of adress', () => {
      const google= new GoogleMap()
      //const address = 'Senate Wing'
      google.navigate()
      google.enterMapInSearchBox()
      google.submitSearch()
      google.goToGoogleMaps()
      google.enterMapSearchBox()
      google.submitMapSearch()
      google.verifySuccessfulSearchAdress()






      
  
      })
})