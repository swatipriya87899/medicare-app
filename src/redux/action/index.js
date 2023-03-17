
export const getNearbyHospitals = (hospitals) => {
  return {
    type: "NEAR_BY_HOSPITAL",
    payload: hospitals,
  }
}

export const openDrawer = (condition) => {
  return {
    type: "OPEN_DRAWER",
    payload: condition
  }
}

export const openBot= (condition) => {
  return {
    type: "OPEN_BOT",
    payload: condition
  }
}

export const loader= (condition) => {
  return {
    type: "LOADER",
    payload:condition
  }
}