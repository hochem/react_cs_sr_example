import fs from 'fs';
import { resolve as pathResolve } from 'path';
import appRootDir from 'app-root-dir';

export default function getClientBundleEntryAssets() {
  const assetsFilePath = pathResolve(appRootDir.get(), 'build', 'assets.json');

  if (!fs.existsSync(assetsFilePath)) {
    throw new Error(
      `Unable to find the "${assetsFilePath}" file, which contains a list of the assets of the client bundle.\nPlease ensure that the client bundle has been built.`,
    );
  }

  const readAssetsJSONFile = () => JSON.parse(fs.readFileSync(assetsFilePath, 'utf8'));
  const assetsJSON = readAssetsJSONFile();

  if (typeof assetsJSON.client === 'undefined') {
    throw new Error('No asset data found for expected "client" entry chunk of client bundle.');
  }

  return assetsJSON;
}
