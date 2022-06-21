export const queries = {
  searchSegment: async (
    _: unknown, 
    args: SearchSegmentInput, 
    __: Context
  ) => {

    console.log("args", args)

    if(args.isAuthenticated === true){
      console.log("Authenticated", args.userEmail)
      const key = 'productClusterIds'
      const userEmail = args?.userEmail

      if (userEmail === 'melisa.alvarezteran@vtex.com.br') {
        // Kiosko con Helados
        return [
          { key: key, value: '167' },
          { key: key, value: '168' },
          { key: key, value: '170' },
          { key: key, value: '169' }
        ]
      } else if (userEmail === 'esteban.degaetano@vtex.com.br') {
        // Kiosko sin Helados
        return [
          { key: key, value: '168' },
          { key: key, value: '167' },
          { key: key, value: '170' },
          { key: key, value: '174' }
        ]
      } else if (userEmail === 'dcvdegaetano@gmail.com') {
        // Farmacia
        return [
          { key: key, value: '172' },
          { key: key, value: '171' },
          { key: key, value: '170' },
          { key: key, value: '173' }
        ]
      }
    }
    return null

  },
}