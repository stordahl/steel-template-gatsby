// ---------------------------------------------------------- //
// 
//  ______     ______   ______     ______     __        
// /\  ___\   /\__  _\ /\  ___\   /\  ___\   /\ \       
// \ \___  \  \/_/\ \/ \ \  __\   \ \  __\   \ \ \____  
//  \/\_____\    \ \_\  \ \_____\  \ \_____\  \ \_____\ 
//   \/_____/     \/_/   \/_____/   \/_____/   \/_____/ 
//
// steel-config: use these variable throughout your front-end
// ---------------------------------------------------------- //
import { plugins } from '../gatsby-config'
const steel = {
  title: "steel-template-gatsby",
  sanity: { 
    projectId: plugins[0].options.projectId,
    dataset: plugins[0].options.dataset,
  },
  snipcart: { 
    publicKey: plugins[1].options.publicApiKey,
  }
};

export default steel