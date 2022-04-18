import React, { ReactElement } from 'react';

import { ListingRoot } from '../../../features/listing/ListingRoot';

/* Currently it does not much. In the future here could be added logic for react-router or any other solution */
export const Router = (): ReactElement => {
  return (
    <>
      {/* My assumption is that router would be only responsible for the top level logic fe /listing
       Sub-routing and general logic for that path would be handled by corresponding "FeatureRoot" */}
      <ListingRoot />
    </>
  );
};
