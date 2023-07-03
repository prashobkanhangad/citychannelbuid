'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "80a9a3edf38ef664f56770f83ea04d13",
".git/config": "e01048b0c9bf4ec6d75d58cf2706ea72",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "98c8554f24e0bfb33a20379308759661",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "709fabfca57153a0934ffa50662e63d3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f399eb0e77ab80ef601c161d145c60da",
".git/logs/refs/heads/32": "ee75095ca2d4ed9d8d548edf80f53892",
".git/logs/refs/heads/33": "ad9b3da609f5331e808f882e5d47455f",
".git/logs/refs/heads/34": "159c13f8ee1cd8b06f25a065685676bd",
".git/logs/refs/heads/35": "a1107c22194a9b8eef036fedf4d5f2ae",
".git/logs/refs/heads/main": "250994ae462acbd867c5b65750ddc725",
".git/logs/refs/heads/master": "c4186ac1e3da8741956ec930e855d2b5",
".git/logs/refs/heads/v28": "10e709c31f93ca8182dac845f37b49d0",
".git/logs/refs/heads/v29": "9143740849d3904158fecf89fde2feec",
".git/logs/refs/heads/v30": "33129b6268aab4447955af3e872934c0",
".git/logs/refs/heads/v31": "0163648c9b072667cc27cea065ecbc9d",
".git/logs/refs/heads/v32": "f42f8a990e254def75053af8b09d46ce",
".git/logs/refs/remotes/origin/main": "85a8d0c2ef9f5a6d5d25c4fe8a3be42d",
".git/logs/refs/remotes/origin/master": "04f33b0e2c1607b06b6f297fc18df06a",
".git/logs/refs/remotes/origin/v1": "441b10e65bf68c943ac660799a6909c9",
".git/logs/refs/remotes/origin/v10": "46e240b8e37c7135790798a8b2c04ec1",
".git/logs/refs/remotes/origin/v11": "4b1a406008dcd4fc88c6528f239a99db",
".git/logs/refs/remotes/origin/v12": "891a340cea7fb1e983705a5eb44732b2",
".git/logs/refs/remotes/origin/v13": "f8c684f2363208cb70a888ddf80d9037",
".git/logs/refs/remotes/origin/v14": "15d89f5e844ae22d3152c02c07e81447",
".git/logs/refs/remotes/origin/v15": "fa228970d83540d0509ac29a53d089f7",
".git/logs/refs/remotes/origin/v16": "3ea00fa43530790af9217095d0c78633",
".git/logs/refs/remotes/origin/v17": "1d892c0425ca3a9c03bdf97c8ab9960b",
".git/logs/refs/remotes/origin/v18": "e9c3b90b0952b5fdcb1d107297b42464",
".git/logs/refs/remotes/origin/v19": "5dec5c3ddc1d3daeb638dc57abff2ed6",
".git/logs/refs/remotes/origin/v2": "60bc9fa3a53fa139af29a245e566894a",
".git/logs/refs/remotes/origin/v21": "22003e41c163becf4de0e0b91fd49956",
".git/logs/refs/remotes/origin/v22": "b11ed989cdca6f4b652966d79c230660",
".git/logs/refs/remotes/origin/v23": "3505fd155296f4e896d066a039c54bf9",
".git/logs/refs/remotes/origin/v24": "284963e7e863efa1c92a90c5883ea99c",
".git/logs/refs/remotes/origin/v25": "2affa191aaebbd622d86511e1b87ee4b",
".git/logs/refs/remotes/origin/v26": "2fd53f0e303d26077c9d6bd084e1ce49",
".git/logs/refs/remotes/origin/v27": "b1eec43e2f269248f62c6ee2e3e09949",
".git/logs/refs/remotes/origin/v3": "d73dd3312d0e5163735b69852384e342",
".git/logs/refs/remotes/origin/v32": "b15915c9af42294343998e3831d173c0",
".git/logs/refs/remotes/origin/v4": "7520f5545d427dbe61eea85eedfaee4d",
".git/logs/refs/remotes/origin/v5": "c4e2072de81539d6fc4a16b260ffc0e0",
".git/logs/refs/remotes/origin/v6": "b226f1540cf6a1505e3168d1cfb945e3",
".git/logs/refs/remotes/origin/v7": "668d46b0e6caf42b91f80da8fa2514c0",
".git/logs/refs/remotes/origin/v8": "62c5664d2247030302f90f9646ceedb0",
".git/logs/refs/remotes/origin/v9": "6a6779e0b4860c23f61f5aba8ffc1b17",
".git/objects/00/c433142945a19aebe05e905e11a6dace083b5f": "47a03e23c3511a61a903ea4d9621c37d",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/09/1e49b00515fed7b366a89f005fdbc2dcbafdf8": "807d9e5ed698109b208d1d034bd85976",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0e/000235b8b035531d5c395a707caddd921b581c": "a954dec17b632b8e8cb5fa007f7c361e",
".git/objects/0e/81b2373ab8105b97c2345ea3f44fbfbd6eb11a": "09ea9b443e081710abed15da067135ef",
".git/objects/10/a75916c5816e30236b09c9a3796821b1714674": "a8465f18a06f9ddce8c92903c9b6cf1c",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/15/43b54fa74d4367a61dd685513eeaffd231fe8d": "989feb515e385cf4d193d42067a968c3",
".git/objects/16/3a9c9702987fd8a74d0c815e869958d9b34f6f": "f7a02fc6d1e5e67682e8bcfad07e1f49",
".git/objects/19/f9edbcabecf1b3429d9f8c5ffb2c2c39057f55": "f24c4eeef9252d1c7fedf2878be89046",
".git/objects/1b/38ee84b25ceebd8be22b0470f307724c0f1e3e": "02e98c7132d1804310f22fe4fa25ee6c",
".git/objects/1e/0d9d114cb412335a16bf56d083297584ff4522": "c26e46bd066f0c436819480a7501d15f",
".git/objects/1e/5d2520f23f8955f6490b98921e1004d8ece71a": "f01c87d9256a7318a82c648f7cbbb311",
".git/objects/1e/87292bcd792430964c97ac726e6e82e79e363d": "c18111f0643f2198bf5e47866af98e78",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/21/44ed571e26a8bbe87940dedd525ba1c82dc85e": "2c7929f8f790acc81c002b8d928499c7",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/26/1bc55f2011692a74d3a61ae77d43e1e11603ed": "6c69e125ddb230a8b2d4200f99e46717",
".git/objects/26/22d2597f6db3b6618ac7b9a94fd8c369f97eb7": "5a13f48a00de7a34011fc1bb7583eca8",
".git/objects/27/f63b002230d706a5a85c68fac046fa5bbdfa3a": "bd331535224cf8a543585a07b14c900e",
".git/objects/28/5d3b3a65eb455d410c3bf31fccc8dbbc8cbdbc": "8f13b3e9424f71d09fc00a1d9e39692c",
".git/objects/2a/c909ccadc0085a2b5dbd800fa7411cf4b11a7a": "2a58413edbe420725a8da2ce6cd9ab9a",
".git/objects/2b/381fce7b1e4e9d950b386cd8a367dcdaaf2aa1": "69beb30709040a4e6e0e667d6d248298",
".git/objects/2c/c8646ed34b15ac71877166dddeca5634f8e333": "5c2ba7bb8ed934ef53275527976c3f14",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2f/e6abe8999f61e1742a442ce592fccb904541a7": "2fa54a8749700b71e53f4fd0fc31bbf0",
".git/objects/31/eda5246ca12c95c40559a9f7cf98a64b41c4c5": "4d8dac8ee4155e1d241da95bdfc43ef9",
".git/objects/33/9abe6d24be8ddd0e65cf7020ec6fbc10f3ea77": "6171ffe6c276718b08a5679d46fd022b",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/dabed583c43872f46960e4e547c41c67c9765c": "eaf451219fb90026b1c94d8f01195f63",
".git/objects/37/1f999bee7f4a5a158d8d87db6a223ef95c3f05": "89ced8cf50622f1341ee7cdd3a90219b",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/37/89cc702851a09df0946275d6d43d235b803c91": "299af49c32c3da6318e9db5dab2fd394",
".git/objects/38/28d72071c41e9038133437412d66766536b306": "04cfa6ce8523d85da3128d07b41d4dd5",
".git/objects/38/2cc9bba759d47553e753e7a041e0b779361afd": "8a897f6a9fe00551afe6e38c641e9979",
".git/objects/3a/d1e0b39d5d6eb7ea000b85b18a4480b6d7e41a": "84805614ec101c87fa55ef911120b769",
".git/objects/3a/f34bb8e5b52c9979b69de71b1cbd22e0182730": "f4d29eeabf777b0e989fb65965a4eab6",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3b/eb7890b45ca2875195243c4d7b8090b4f2549e": "7ad1148a6be26d6dc597bf1d110c6ccb",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3d/3ee4a025d1a1fec87536562b0afd3dfab395d8": "218dfe4f265f5332ac4dc38e673346cc",
".git/objects/3d/86bf37a111d72f4e08a8c60bd11ece23f4bb02": "4c7495a971f924f8887173fc1749fe52",
".git/objects/3d/ad7d4db1e515c405180bd410f742ab3b6b0e5c": "ff7925896084957267844acbb29b9db3",
".git/objects/41/4ab03b246761c68edce3fa1a38a012950e7622": "f4d1343299604198e1349a9ea75e4689",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/43/2b3bb42dc1c9c19755b82161c070848ac15585": "aa8565bcd73d6920d1923b4dd912424c",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/47/3e027c8ba74ecd39dc32335437e233e02a1c06": "8e2a941bd45d4990ba84156b4f6221f4",
".git/objects/47/b8d978910ef89dec6d47dad1c9f374e9853b17": "5cfb8ad8d80d4c0676fa6cdfad606c53",
".git/objects/47/fe1b26d50d34ed621f63b5e36094551ccc5190": "c24a101cdd7dc570da9c5f797a7cc67f",
".git/objects/48/bc82a57a2b255f2e1b8c0b4383f6ec6a892afc": "c5f73217bc3808dd1b01d428c70d880b",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4d/b8ed9c97e8d5347eade1229ab87424d6cd4738": "2a561cf40af660bb8a8ba6daebe278ca",
".git/objects/4f/0d3fdbd3d478d6bcc7873fba9d72b6249d01ef": "2e996b2fdc5ffb5d666e672e171e109d",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/c36f8b8487d3343202744cf39874526f640f12": "bcc8262fed201175e5df4e687c6216f9",
".git/objects/53/25e2dc614722ac2130d615b8d92bc55699605f": "23d4d1c57d2ab37cf6052a811ab64a3c",
".git/objects/54/072b8c5629095d399f16762a547a6c76c8557c": "c5a76015b456678db1ab9dbd5d7e0e90",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/56/10982a1fd76da170a0d5f2e357ca98eb3aeb3f": "fad100ff876cb45797d37f2553a59041",
".git/objects/58/80a4e28d05f8c9ab408e3d390462c2d57d0e2f": "71972e7d772bfcc9cdc5bb1ea1a722af",
".git/objects/5b/cb79303ca807ffb307824cd02d4f5870358aed": "1cf78249d153c1458a8b6413c8096d0f",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5e/1d89152f4e551407e5061f6bb75d8c146657af": "3f2fd8e1fca9d5e10c24cfbccd520c8e",
".git/objects/5e/e6bd1251accda270bb528b93f47310651e87fd": "680f70a0975db96f86baa6b76b43c0c0",
".git/objects/61/ef7ffcd72e7cfba2261d2da3ea1bb616935015": "e8c7fc2635bf8586575f75223ac62301",
".git/objects/62/030786fd51e4e1a32b2efab535b7767c1b20e9": "1714153151fb0c7dd54073e02817b2e3",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/68/928d7f759ac0162bea9e5d8f5b29a347e47acb": "3859716e6557991d79fc69ef3098206e",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6c/94993390fe2808799eff8e1ddc340db0428d95": "1300087f5d237b187c208a41f31d86bc",
".git/objects/6c/eb2a6c5bf6c7cec75285907e0e2020341fb7e1": "11708117f6eb6e621ff6365c7ee796e3",
".git/objects/6d/0a9fc30af50b22b57b2d04de55f7744dd6990a": "d24c43737bb8cf21d4a572645760bc5f",
".git/objects/6e/e66287937b9461981baa866e8de8263b854f7a": "61d1fa1ef33dfd0f0515244020406419",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/6b89226856a184964d4ef26acca4690f34feb3": "b47861a6de6336cfde49244ec049778b",
".git/objects/72/9d192a9108502c08a7ef6bca6038b4e9374666": "0d36d657e74e68b0ea552debde369b74",
".git/objects/72/ada6baac9193047a04d1ef7fc6c08c19a0aad4": "515cf0496f523efb00e1cdbca48aebe4",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/a0ca14d1458f8564616e5cf961fc699d56794d": "ddbaf45732a7ffcbb6760c7494058f17",
".git/objects/76/08ebc0ee02b5ab6e008d6d7b2d2ecceca3f52f": "2890e162b14f6bd59a809896610b33e7",
".git/objects/77/219065e6374e836614f8d93218f8ecac4983e3": "244d049f0ab0b9f233944d15d7d7948f",
".git/objects/77/4cdf728da1fbdae8dc7d1875d92e2131386e6d": "7195204a3d4f60b4a6dd2fd4102a8547",
".git/objects/79/b7aad8ac35e54c0d70943c2888034e84745eb1": "c01fa98c45a5687756eab1e89022a648",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/1d80701aa32462f4b6b0320054e5519de08a7f": "5b5816962467895a84897fbb64079d02",
".git/objects/7a/508cfc71d63f37260ddbc2e9b14f821209a81b": "632d15e8a57781095c9198b9de19afd8",
".git/objects/7b/3b164f49bfc7136be894f2c67fb55f5a059112": "d0d75bc36754d8af82a5ef615977a609",
".git/objects/7b/5cb54dc3bf8e72a9991d9bfe5c729828100c95": "cab6400e135882c763d04ce1e0cf8c86",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/7c/ae1a379ea47e115ca046c9367c1766d4a2d79c": "fd1dce645f0fc0304838c9163c449e0b",
".git/objects/7c/be0786b8125c22c62c8911120755c42f26d4f5": "1a76e8ee008487494c0430f9cd6acff2",
".git/objects/81/abcb4728e1d90ff21524196b91770460d4bfa4": "278f51c402b19d495dac8912b099aabe",
".git/objects/81/f8da657f4d111d76b4d2cd5a7411b77310dc0d": "8b8ee3407d538b030f8eb735009c6074",
".git/objects/82/9eda8fdcf133ab2083dbc880b6362b11d0c8ea": "72fd972bf7f0020b924435fc702e5219",
".git/objects/85/b1d659f74d2034ffc917a1bd11cd3d35bdb1f0": "e2538c4c1cbc21528080c92da2eca697",
".git/objects/87/500b5c73995fcace6fc6e09ac7b7ac56e7eb05": "bc13352180ae24ee0cee1fa7d1ffc49a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/602e1bdcb3a047e260617b0410ce0f2bd65bb5": "c18b3ff216a3a8c2b43d7cfb91b369f0",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/8507cebfa39fe003dd99dd1ec34b828367fb6b": "91721b83eae295b8d03dc825a43e8429",
".git/objects/8b/c8d0dd497d0afac16e2ce7f0d63d7c7ec7f62d": "19b4e44769a4adf2e26747d9a5ec2a72",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/49ae4b208f8be7a9829c7b166604e8dc298511": "2ba2f0ef755b955b13d287b308de71f6",
".git/objects/8d/8396890381d9b1b9ee14e053d18c72bfb6ca88": "c5fc44ca00b222baa5d953e8c7626436",
".git/objects/8e/7e44868e9aceca2c4236c3fbc082b3c38a698c": "cca0c2f010236ba40d7257f6bfad99e3",
".git/objects/8f/9e9a78f8ec317179abe2cf9aa80f8d667a0d27": "547644963a7250eb0b5a068131a77ff3",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/91/27b0afedfe3cc582b16077d85ef09015c00824": "8182cddf0d2024a5079a74c9a94d6baf",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/95/438c43614724531698e75338ef13cb0deb6160": "2bdfcea903adf84975f7fa35a1814917",
".git/objects/95/53decb82b13327fdba4755abe3a4bf8115b3a1": "4b5896128e7f174468889802050e2397",
".git/objects/95/f2cdac77003676e6c45f4a6b6b92d2a5df913d": "3e7a9cbe25ce7ebc8298a1ab275fbc19",
".git/objects/96/2c9f4d1091819fce996720ed94b00bf67332b1": "449badf7884cd6c648a34532fd33f348",
".git/objects/9a/14f8962d6fd85daf91e6e7a52fe53f12fada66": "f77a12d0e371bd0b017fff2fc89b5b76",
".git/objects/9a/581a540c3a1095971dc9df47ee32e99889dc66": "a88d57e67a92da25c0d90e68dc0992eb",
".git/objects/9c/040c4c1365e8889edf2154a5b92b515e457995": "b27363d5b010cc91a8463b3b68e45455",
".git/objects/9e/2d10269f2d3a9f3f6997f32dc98092fbf1a5a9": "277c9575f6a1c0e5df5bcdbeda887da3",
".git/objects/a0/5ed2cd849f9be39a9aacafdf30ec9969b0b814": "4378d3e95fd9667ccd104ea5898d1dca",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/aa250077edf70d82648b3a8e3231f43d4e1a2f": "9f87aca3dac8d4177de816564b3ffef0",
".git/objects/a4/e0cb87a779541b16dbfc26aa4b544d625164ba": "ca4304f66ee4776df697c7f7b6212b48",
".git/objects/a5/47d7530b17547f40e077669375b1875461b335": "9e2b85de372e6f80ffa977145f86f3c4",
".git/objects/a5/62e82839874506fc83b6c6b084107c4160ab53": "10763e1c617b99b11e885d8d14a93b25",
".git/objects/a8/4b66c60e8a39b37ee8ae2af827b8b2793c2a1f": "119c342d374399710cdba357c7f481c2",
".git/objects/a8/a3a7932a3f2c96af31945055b75d0c7aa937fb": "82d07e17abc71533af8420aeb7e872d6",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ac/d5c6a380705fd9e9d7de19481c410d7f10a849": "a3ab03b03d03a3457b45c31615344939",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/b0/291023dcb33a817898eb9817137b3e3a4b8165": "5ca0f5ccff03351290336a62c35171be",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b3/da79892c2013041950ef8889135f39b0d83ffc": "06e14fd537e20eeaccf5f48621d7e59b",
".git/objects/b3/fbb2e78b3413dc1ea20858278a5e6c74b9a0dc": "1b6b342ac834221c9952fb826f2bbe9e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/d5ce6ab75b3c00379c8a61a36b86756065ff6e": "b2c14c35cdf8556122aca88326897aac",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/aeb684defe152a81b83edfb208524cefad4584": "d5dc28e01e5488d58d66469aada25bc3",
".git/objects/bc/d98da864e2c48c2aa01b4b67c7cc547e196617": "70b83df095cbab1ef37e18efef2788b3",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/bf/b34b1d678c1de94ad5a4c659a165e3a8018c38": "1eff6aa3b513324b37786ae0a4a4accf",
".git/objects/bf/dd43d2b2781093cc64799bd0dcd007a85df70e": "9de470e95222c1209da23a347fdbe367",
".git/objects/c1/03a9581845de497cd16f64d828f2aab39f2f23": "7bfa4e748215ca12114efdb06562597d",
".git/objects/c1/2f8353695b6a746b1976225e4ee30b22f6d3a1": "34b6d7fd16e33f0e563bc4e7b4b5b59b",
".git/objects/c3/3630404a2f8b020c1974ad545e446228d706eb": "6bc7e0d41105a2fc2d96ed9e99c98811",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c3/be47e8ff9fcf00e43e2fc277f3d7468df99492": "5802497da690abae52d119e27a279ffa",
".git/objects/c7/7640b494299ca88d195ce3c0a684660d6a5107": "f8498c7a30c08fc691b58e75a8577f4b",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/cc/5479e2bdfa929ec9df1d5f42b67bccc46aa13a": "ea7142b3c40569874c1b0bf9a47a9822",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/ce/d5b8c3660266e70b5bdf4f8b70fc1398af72eb": "fd995225a08d60a14110f4363ee385fa",
".git/objects/cf/80a32dc9ccbeaee57033019dced7b2db4774ba": "17cf765a6e24e48159756f4f5ea2a261",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/ad5c6a947146572bd46656e06b1566e1071020": "d3ff3ffd8c8b896e86bda4253474ec99",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/50a15f3efc50c3fad3ed819b68579918267d5f": "0ad26049c8fdcab8d7e25fcfb2e7e6ce",
".git/objects/da/a3d06656edfbf8fd2f87164a9db7821cc8333d": "c5138b279390bf36d6c70070aaf110c0",
".git/objects/de/dda22b04599332a3516e04777306f1c87d0a70": "b6c999a3b141c7bfd2203e9f46ea568f",
".git/objects/e1/eab478bd97ed783fd87d9427675f22df125857": "d3ae2d8ac57fc24ee923127715130493",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/e4e9499d0bfb11686ef9deaa2061ca5853da68": "c89339d819621c4ebe53568babb43966",
".git/objects/e6/ff1010b6fa3db846cafc85ddeeeb15fe498415": "8068e2abeaeb225082963d5b229a26ca",
".git/objects/e8/c4994d2e62235bf2c9eaf761493da82b758077": "6a3055598842bed21856f6760ffef954",
".git/objects/e9/e79e7fb07fa9902656ec7e146dadeb6f908743": "eae5224885f28f3b37385e1b2103b450",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/3f88ac9d6a79f0a00b17442ca130291c287f1d": "eb24f11da6680ba2ef2fd6c0c1393541",
".git/objects/f1/6b586918ae57b838e8c23711d7ff36727d69ca": "75d81a07f217b8831742764c638708b6",
".git/objects/f1/9036d58bbcc88c645d77a35905f019aa500904": "ffbed51704018df58f7389392284ed83",
".git/objects/f3/db627033232cef99993ca7974cf1fb178c0fbe": "bb2341df6dff7003e2958f5ffcd7663a",
".git/objects/f5/ca3d8101b7a22a698443f59295011482486fa6": "c9d1da17f48eba6dbeca87e9508698b4",
".git/objects/f8/0aa8d17f3e30d9dcf327879ff26026574397d1": "22be51a5eb0d0e75cdda965fc445c94d",
".git/objects/f8/ab38dd0d2eedfe2ae5ef52975b2136ca85b3a0": "a484d6df94e2c32076aa1ce374408d92",
".git/objects/f9/278195f1b1964d12b5f960093b81e96f39a8cf": "7e4a79186720ef3e50ed828983c3bbd0",
".git/objects/fa/511966a9a8a6b8a38dfd01c9a300015224b7ae": "2686abd06d3c7f3300b531369f4363f9",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/pack/pack-38768ed40dce56d6a7ff92377c04c1f40ea58f0a.idx": "ea69e57c8deac2ecca801aa0ca2601ab",
".git/objects/pack/pack-38768ed40dce56d6a7ff92377c04c1f40ea58f0a.pack": "cf4e3cae2655b6b9c16bdde2ff48751b",
".git/ORIG_HEAD": "14f84c1e9df33ef586e9a8009a6b7a50",
".git/rebase-merge/author-script": "2401fb6318ed1fb62dd46dbc91f8d715",
".git/rebase-merge/done": "d97f736b55b72e0e5376f7d201cdcddb",
".git/rebase-merge/drop_redundant_commits": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/end": "6d7fce9fee471194aa8b5b6e47267f03",
".git/rebase-merge/git-rebase-todo": "f6a0867491cddb17b27fc7cb43fda2d6",
".git/rebase-merge/git-rebase-todo.backup": "3a01b8831962297959fc338ed33f15a0",
".git/rebase-merge/head-name": "f9b6ad22ff731656b31d66dcd346f891",
".git/rebase-merge/interactive": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/message": "df081e88c67dda0505b38cfe38159de3",
".git/rebase-merge/msgnum": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/no-reschedule-failed-exec": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/onto": "7760544d678a1acea3fe51a318d575e5",
".git/rebase-merge/orig-head": "14f84c1e9df33ef586e9a8009a6b7a50",
".git/rebase-merge/patch": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/stopped-sha": "e3bbf644f154e7c783ea715668f06338",
".git/REBASE_HEAD": "e3bbf644f154e7c783ea715668f06338",
".git/refs/heads/32": "14f84c1e9df33ef586e9a8009a6b7a50",
".git/refs/heads/33": "14f84c1e9df33ef586e9a8009a6b7a50",
".git/refs/heads/34": "14f84c1e9df33ef586e9a8009a6b7a50",
".git/refs/heads/35": "14f84c1e9df33ef586e9a8009a6b7a50",
".git/refs/heads/main": "60478c8b317cc7b2073848a43699c12d",
".git/refs/heads/master": "e3bbf644f154e7c783ea715668f06338",
".git/refs/heads/v28": "e3bbf644f154e7c783ea715668f06338",
".git/refs/heads/v29": "e3bbf644f154e7c783ea715668f06338",
".git/refs/heads/v30": "3171dda292c71760373f4ca017065a41",
".git/refs/heads/v31": "3171dda292c71760373f4ca017065a41",
".git/refs/heads/v32": "3171dda292c71760373f4ca017065a41",
".git/refs/remotes/origin/main": "60478c8b317cc7b2073848a43699c12d",
".git/refs/remotes/origin/master": "070b9c18dfc581978ba5db74267ca195",
".git/refs/remotes/origin/v1": "0c81c087b7692416b4d666378588482a",
".git/refs/remotes/origin/v10": "da50d6dfe0c2d96d27d55d3e78b04a18",
".git/refs/remotes/origin/v11": "ed2bb11a8e7e687995497854fc610626",
".git/refs/remotes/origin/v12": "3f4a343dca21ffe484f597c3b8435e52",
".git/refs/remotes/origin/v13": "f99f84e6f792dbd1b425835f6746d544",
".git/refs/remotes/origin/v14": "f85ad69870b66cb2c904f9ee201c3393",
".git/refs/remotes/origin/v15": "df55311689fb4d18baa57d026fb63e05",
".git/refs/remotes/origin/v16": "ac7ab4e6f876194ab0f768c63fc50f88",
".git/refs/remotes/origin/v17": "4e3396aa7f4479e503254612c8f5a363",
".git/refs/remotes/origin/v18": "b9407938578bab3380c5695a77ac7b35",
".git/refs/remotes/origin/v19": "1b02f2c96ce080d0e1047627078b36a7",
".git/refs/remotes/origin/v2": "fb2c8b2632c91a7e9d5bb159e57c20fb",
".git/refs/remotes/origin/v21": "55eef79ce7cdf259ea31c049d182c2ba",
".git/refs/remotes/origin/v22": "b06ab1a0a6b2bff62ddffe57b1f0bd06",
".git/refs/remotes/origin/v23": "ab748274d58df1aa2d7586c81f56c542",
".git/refs/remotes/origin/v24": "0163080dde6afa7021e316f2ae218d5e",
".git/refs/remotes/origin/v25": "342d3017f7dd18ffecba0c234c53fb05",
".git/refs/remotes/origin/v26": "c10c593a457278ea42c98deb533bebea",
".git/refs/remotes/origin/v27": "ceec26f8252a6be8301f986be5bea339",
".git/refs/remotes/origin/v3": "386b15bf35c4a1b4712d066bfdada112",
".git/refs/remotes/origin/v32": "840534c76dfff4fb36b167e4f8f27470",
".git/refs/remotes/origin/v4": "5cd26d4612984c1bd8b1de1a177cd623",
".git/refs/remotes/origin/v5": "14787a60f0c178a896150edc569de886",
".git/refs/remotes/origin/v6": "3166f0461268d8eccc02c31a3c023951",
".git/refs/remotes/origin/v7": "f8aa74a660880d5d949da8b7930383f1",
".git/refs/remotes/origin/v8": "e76a862662e9e3c7e7d1a3bd45f94f0c",
".git/refs/remotes/origin/v9": "f0d5c2bc76647ee5c2f75b4b0e6d5664",
"404.html": "a4e2271d19eb1f6f93a15e1b7a4e74dd",
"assets/AssetManifest.bin": "a97ca1a1a5345690a03f3a5388c895d9",
"assets/AssetManifest.json": "522ebf0921e5ea36f3010e49b2695de7",
"assets/assets/akshar-regular-unicode-font.ttf": "3d67df54a1ac4aaab086ffed7cfcc4ca",
"assets/assets/FML-Indulekha-BoldItalic.otf": "a616c4e87a489f70f078acdfbece8a7f",
"assets/assets/LOGO.jpg": "ca3a1daf33ff363c98ff6ec59acad49e",
"assets/assets/meera-regular-unicode-font.ttf": "a03876611b8ed699bb6d5d214a56e6a5",
"assets/assets/nepal-edited.jpg": "137cb83bf67cbadec68b4d481c87e7c9",
"assets/assets/NotoSansMalayalam-Regular.ttf": "f177ef084810be7e3b1b6995703c8230",
"assets/FontManifest.json": "3e3e5c1a54732c19bb1cdf2c6a66b945",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "eef52fe1e257a34e2a0106d0c84b028a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/web/live.html": "f3a2fb10d707238e30e5add651291605",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/profiling/canvaskit.js": "e275cb040a1d217b0f8f54b8fbd2ef52",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"clappr_html_view.dart.js": "650dc596bf53fe40c3a9222ebd1faebf",
"CNAME": "00e365270c756184afa26fd157acd449",
"favicon.png": "c013846172a148f9dd30c02b7dc55a6c",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "65733b81af69c46c8154276c565aa725",
"icons/Icon-512.png": "1958df69c213c118b32cd7425e3e1422",
"icons/Icon-maskable-192.png": "bba678b6a68e617f4ca55f3c5da6e83f",
"icons/Icon-maskable-512.png": "9cbf91c2a86144821505a087ef144951",
"index.html": "d42f40d92d5a6ac5d64083f3c55878af",
"/": "d42f40d92d5a6ac5d64083f3c55878af",
"live.html": "f3a2fb10d707238e30e5add651291605",
"main.dart.js": "b80de37646f646c1b639558e2756d005",
"manifest.json": "8f8abe8bde837aa0929aebc7698a83ba",
"version.json": "8cd64b299d4d52898c2141ef91163003"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
