export const queries = {

  searchSegment: async (
    _: unknown, 
    args: SearchSegmentInput, 
    ctx: Context
  ) => {

      if(args.isAuthenticated === true && args.userEmail !== undefined){
      
        let userEmail = args.userEmail;
        const response = await ctx.clients.masterDataClient.getIdOfCollection(userEmail);

        if ((response !== null || response !== undefined) && response.length > 0){
          const collectionIdsList = response[0].productClusterIds;
          const keyParam = 'productClusterIds';
          const collectionsIds = collectionIdsList?.split('-');
          let segmentList: { key: string; value: any; }[] = [];
  
          collectionsIds?.forEach((id: any) => {
            segmentList.push(
              { key: keyParam, value: id }
            )
          })

          console.log("Segment array by user: ", userEmail, segmentList);
  
          return segmentList;
        }


      // 'melisa.alvarezteran@vtex.com.br'
      //   // Kiosko con Helados
      //     { key: key, value: '167' },
      //     { key: key, value: '168' },
      //     { key: key, value: '170' },
      //     { key: key, value: '169' }

      // 'esteban.degaetano@vtex.com.br'
      //   // Kiosko sin Helados
      //     { key: key, value: '167' },
      //     { key: key, value: '168' },
      //     { key: key, value: '170' },
      //     { key: key, value: '174' }

      // 'dcvdegaetano@gmail.com'
      //   // Farmacia
      //     { key: key, value: '172' },
      //     { key: key, value: '171' },
      //     { key: key, value: '170' },
      //     { key: key, value: '173' }
    }
    return null
  },

}
