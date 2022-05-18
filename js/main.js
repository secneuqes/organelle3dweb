const mv = document.querySelector("#model-viewer");
const annotationClicked = (a) => {
  let ds = a.parentNode.dataset;
  mv.cameraTarget = ds.target;
  mv.cameraOrbit = ds.orbit;
  if (ds.fov !== undefined) mv.fieldOfView = ds.fov;
};