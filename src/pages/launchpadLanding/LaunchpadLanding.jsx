import React, { useEffect, useState } from 'react';
import { LaunchHeader, CompletedProjects, UpcomingProjects } from '../../containers/index';



const LaunchpadLanding = () => {
    return (
      <div>
        < LaunchHeader />
        < CompletedProjects />
        < UpcomingProjects />
      </div>
    );
  };
  
  export default LaunchpadLanding;
