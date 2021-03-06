import type { FC } from "react";
import React from "react";
// import { useRuntime } from "vtex.render-runtime";
import type { Runtime } from './typings/global';
import atob from 'atob';

type Props = {
  segmentParameter: string,
  segmentValue: number
};

declare let window: {
  __RUNTIME__: Runtime
};

const ConditionalSegmentBlock: FC<Props> = ({
  segmentParameter,
  segmentValue,
  children,
}) => {
  //obtener de la cookie vtex_segment
  const segmentToken = window?.__RUNTIME__?.segmentToken;
  let selectedSegment = <></>;

  if (segmentToken) {
    const segmentTokenInfo = JSON.parse(atob(segmentToken));

    console.log('segmentTokenInfo: ', segmentTokenInfo);
    
    if (segmentTokenInfo && segmentTokenInfo.facets) {
    
      let segmentFacet = (segmentTokenInfo.facets).split("=");
      let facetParameter = segmentFacet[0];
      let facetParameterId = segmentFacet[1].split(";")[0];  
      const condition = segmentValue == facetParameterId;

      console.log('segmentTokenFacets: ', segmentTokenInfo.facets);
      console.log('facetParameter: ', facetParameter);
      console.log('facetParameterId: ', facetParameterId);


      if (segmentParameter === facetParameter) {
        selectedSegment = <>{condition && children}</>;
      }
    }

  }

  return selectedSegment;
};

export default ConditionalSegmentBlock;
