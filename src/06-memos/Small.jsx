// import { memo } from 'react';
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import React from "react";

export const Small = React.memo(({ value }) => {

    console.log('Me volvi a generar :(')

  return (
    <small>{ value }</small>
  )
})
