'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "97457d0e1d82ddbe09d04065a09ece4a",
".git/config": "f8dfa78e3061c0e3705be0fbb198b748",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "f9d63595766269a0ec833f7986fbeb91",
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
".git/index": "1dd435dec529bcc8748b5c4024ffd555",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "93116e67ba16abf3d06e5aa0199d7f5a",
".git/logs/refs/heads/master": "51c34663fa617fba78a7ee8fb232cf15",
".git/logs/refs/heads/v1": "367930c98b85979419ea265b3ddaddbd",
".git/logs/refs/heads/v2": "b6981ac692b9966570cb151d32688b89",
".git/logs/refs/heads/v3": "5eaa0ed3ff3a8efb6468bbccd0d4b31b",
".git/logs/refs/heads/v4": "ea917cea01ca3db622658ebbbe4a619d",
".git/logs/refs/heads/v5": "84e635af7821c53b256c24da8781528d",
".git/logs/refs/heads/v6": "351f135866aa84e246c76c3e965f9db0",
".git/logs/refs/heads/v7": "6553e8853a2a0fc04426a40e4d33daaa",
".git/logs/refs/remotes/origin/master": "b5c35f45797a047e8a2e13ea511d9eec",
".git/logs/refs/remotes/origin/v1": "74c9481d211b9a9546ec4d74b42aabec",
".git/logs/refs/remotes/origin/v2": "3d740d654550400a6184c9794504489a",
".git/logs/refs/remotes/origin/v3": "49669605d9e1b6a485ddf1b2d9dd5da1",
".git/logs/refs/remotes/origin/v4": "425621e76e3707e29de95bfdbc323693",
".git/logs/refs/remotes/origin/v5": "d8e22098fbe93c68aa8fc790eea99d86",
".git/logs/refs/remotes/origin/v6": "f381f0de0c7ab501224849142fa5263e",
".git/logs/refs/remotes/origin/v7": "1259b0980680d558f92cf54087d1c3e2",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/05/4dbadb1da60e1c7e810ef83f6d2e6734cbc90c": "afc0432e6e878c54d84289eee415f95f",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/07/4fe2cbca0049375f3405b9d0cd133792dfe6af": "c579870f325385b49b5fea60705ba6f1",
".git/objects/07/f965a6769f0618c2a166e57b9197d9633e4ae4": "62b1d20e4db36a16a907b7d4b6d8b441",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0c/b09dc1045801fe69828b7fd620c68f631fab06": "fe2783081f28eee0062d1d3f77b72b3d",
".git/objects/0e/81b2373ab8105b97c2345ea3f44fbfbd6eb11a": "09ea9b443e081710abed15da067135ef",
".git/objects/11/7f36d1ffb9e1f66ecf32c74b314731d1ff3431": "355769153927a8de39eb83444105f7c6",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/13/6a982d4c925ead722b84a006606109d6a3fe21": "3b584ff6f35449f4b859aab4e64ad047",
".git/objects/16/1725072a4d96060f2f99a7809eae9d7947c09a": "870ec7ecaaf15bd1f9f9f9a28d9ebeef",
".git/objects/1a/c7fed18a58963392314028c4140cf1d5677b5c": "863298d7e1301ab81f956fb0ea29798a",
".git/objects/1c/ebf30f68b66c7d6423a6e59c36c2f51459a234": "991e739f221a2e1da2d65d8743d5fb20",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/07497b2eea70c204b9ad91c2b508b03af617da": "20831bd5bc820b345794a9c4b3560631",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/20/a6472ed6669ac4554c7d574763bac44609c238": "383c9d55f804d2c497eb4fbf1bea0426",
".git/objects/21/17c08e4e6000120a7031b2cdae681c8c6ec822": "aac37061026440a54e84f4ae30674012",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/28/5d3b3a65eb455d410c3bf31fccc8dbbc8cbdbc": "8f13b3e9424f71d09fc00a1d9e39692c",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2e/414c1d36bba4b27ee9d29f3c3cf2d1a029f49b": "5cf26046a26bb2fef4ea6d8a51541235",
".git/objects/2e/d061da7d0337730dff5479d65178d7314d6800": "da5bad01503d51208d0b56ccdcdaac88",
".git/objects/31/eda5246ca12c95c40559a9f7cf98a64b41c4c5": "4d8dac8ee4155e1d241da95bdfc43ef9",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3a/4a4d37334921eea22fabc479c447741451974f": "3a035746ac437787f1dd759b27bc08d8",
".git/objects/3a/d1e0b39d5d6eb7ea000b85b18a4480b6d7e41a": "84805614ec101c87fa55ef911120b769",
".git/objects/3b/43078f79f5658ed873ee93b53fd8b08304fb13": "b5899c5cfae0e1f7dd9621c9467f1ec4",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3b/eb7890b45ca2875195243c4d7b8090b4f2549e": "7ad1148a6be26d6dc597bf1d110c6ccb",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3d/3ee4a025d1a1fec87536562b0afd3dfab395d8": "218dfe4f265f5332ac4dc38e673346cc",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/45/2509e51840f124c724d83024f25aef583c82d5": "68e5c69e6ac00ae151aabad9f209d3b1",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/47/fe1b26d50d34ed621f63b5e36094551ccc5190": "c24a101cdd7dc570da9c5f797a7cc67f",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4e/10c027c89597ada24b0b59875bea982bd57797": "b820b3c89db031078abde5451bd70af9",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/01494271d88749a7e9f58bb96397bcc7565662": "0afc074ed9e49ef6fd305bb78b6a59b5",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/59/351e67d015f6be8353a43dffe4f839c225bffd": "c9fc37fae343176109afa1c3435f2bc3",
".git/objects/5b/2c242d3c7ff508d01b704bce1bcda55197c3eb": "98da71ddc80ffbcdc1b58e8732341f74",
".git/objects/5b/c16b03bce10cd21a851bc483c1b9a89fdac5d8": "c38f65aaac3bcf82cbe5ea9bfad2786c",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/62/133d6b38cc07b1226053d713e1c5b6cf919ba2": "9128665af575d131e449680ea3a2d649",
".git/objects/62/5b80afaf518eb4c3003897e7a31c2802c296ef": "858f1ff46158f373317962a6e1c59ea4",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/ccdd4f1df84de2232dc528f0da5dee7eac96c1": "a2249e88d382736ef0910508d91bea3c",
".git/objects/64/d39d7f984f807dc5ecf496ef92313a09b5482b": "ec8dadf7f937e66ecc415a2bdf8842bd",
".git/objects/67/a2b967ff61dcdcc7fba6aae89f0d3768025637": "d2ec5b033c7c365af0722c8fd86b889d",
".git/objects/69/4d7c3a8c2280938dbd55de73c56592f063ece4": "59f2303f78083990bf78c1cb98a65ae1",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6c/6312049e1876c093cc05e0ebdbdf3cf6adc977": "f0eecb9177b4e521ad09ef6840c25fca",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/6b89226856a184964d4ef26acca4690f34feb3": "b47861a6de6336cfde49244ec049778b",
".git/objects/72/9d192a9108502c08a7ef6bca6038b4e9374666": "0d36d657e74e68b0ea552debde369b74",
".git/objects/72/ada6baac9193047a04d1ef7fc6c08c19a0aad4": "515cf0496f523efb00e1cdbca48aebe4",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/79/b7aad8ac35e54c0d70943c2888034e84745eb1": "c01fa98c45a5687756eab1e89022a648",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/db66b811bc06f13683dda17ee3d51f662c5b99": "9740ea0126040b1e083abda10860a89a",
".git/objects/7b/e6049fa845cbae0344cfd9ded5227f86ebbd09": "73b1161e08627d52e6505e01a2d99387",
".git/objects/81/f8da657f4d111d76b4d2cd5a7411b77310dc0d": "8b8ee3407d538b030f8eb735009c6074",
".git/objects/82/9eda8fdcf133ab2083dbc880b6362b11d0c8ea": "72fd972bf7f0020b924435fc702e5219",
".git/objects/84/27237486e37738d0046a5557f9be18f07ab951": "5aa2d923de42ab82b8da576f6eda6424",
".git/objects/89/7607e9831e890004f717b415c070e5bb56a517": "82dec6e030e08ee3d31520565cd537f7",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/377bf9ec9c9eec928a88327fc4316aa8e12a0b": "7bc83d6dc315ef6376a50e52cc263fd0",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/91/59e8888310ba53cbf51651fe72a21faea0dcd2": "1c14d055dbe3063d3f1bf478e1dceab4",
".git/objects/91/766d5ec63f56d7bd01446b10dfeae82843b79a": "123164b118fcc9c8551f9f560575d4d4",
".git/objects/93/416501ee10f17075ae34e193608e1ae84a8692": "64ca2ae52f8ee593d6c4f70f8e15e7f1",
".git/objects/94/7d1c088b507cb1652867d0a218a3688bc0c766": "a4816cdb4ccc0933a335ec027aeb6695",
".git/objects/96/2c9f4d1091819fce996720ed94b00bf67332b1": "449badf7884cd6c648a34532fd33f348",
".git/objects/a0/dbb3c52de45974a99d87a3e16c35d270bf0f7c": "4575ee7f08a56387d00809aec8c4fc73",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/73808a11449cc0406979b5c3cd79593cd64389": "65943d9a4cba42395e695d02a53e21d6",
".git/objects/a4/09770dcb27f7bbe45fc0c80e8c0eb6b55f4758": "f5a994fcd5cbe2588df2d2efe6685d91",
".git/objects/a5/324a22c96869cb9cd8ada2fa4ce7b262b5ed4a": "da86919c342ee118af2822a661364223",
".git/objects/a5/47d7530b17547f40e077669375b1875461b335": "9e2b85de372e6f80ffa977145f86f3c4",
".git/objects/a8/4b66c60e8a39b37ee8ae2af827b8b2793c2a1f": "119c342d374399710cdba357c7f481c2",
".git/objects/ac/2544744c56115121b38714c63ea5ed5bee1250": "0169b6c74da899de451e032fe6738693",
".git/objects/ac/d5c6a380705fd9e9d7de19481c410d7f10a849": "a3ab03b03d03a3457b45c31615344939",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ae/0e4d3495d9c72fa7bca7cece64fde4275e298e": "30b4a851fd5b97b773d4711f11b69eac",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b3/da79892c2013041950ef8889135f39b0d83ffc": "06e14fd537e20eeaccf5f48621d7e59b",
".git/objects/b3/fbb2e78b3413dc1ea20858278a5e6c74b9a0dc": "1b6b342ac834221c9952fb826f2bbe9e",
".git/objects/b4/7b84b2ef3e39ac4072f1979d90f932a9e5769d": "68771bf254f02cee786b026df534528d",
".git/objects/b8/d5ce6ab75b3c00379c8a61a36b86756065ff6e": "b2c14c35cdf8556122aca88326897aac",
".git/objects/ba/3095ee406c2b16a2a3588f340130ff3e27b666": "17e29e47e0ccd538251788368270d451",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bf/b34b1d678c1de94ad5a4c659a165e3a8018c38": "1eff6aa3b513324b37786ae0a4a4accf",
".git/objects/c0/68c4c49f6b02cbbafccf756b523f07f35d146b": "af9abc05e21bc9a66484908332361178",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c7/7640b494299ca88d195ce3c0a684660d6a5107": "f8498c7a30c08fc691b58e75a8577f4b",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/ce/d5b8c3660266e70b5bdf4f8b70fc1398af72eb": "fd995225a08d60a14110f4363ee385fa",
".git/objects/d1/eac8baf13f9acce5d3027844844f91bfbec2a8": "d7e95dcdee44cf9a8e8c58159fc00e51",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/ad5c6a947146572bd46656e06b1566e1071020": "d3ff3ffd8c8b896e86bda4253474ec99",
".git/objects/d7/585579b39054882d94e8f9986deda5a7fdfe5f": "41d18566a3081a91b19cdaeb30612bcf",
".git/objects/d9/43f962f6746cca78eccf651d4051a18267354c": "40ad88817241555bc1ec016cdec69b24",
".git/objects/da/a3d06656edfbf8fd2f87164a9db7821cc8333d": "c5138b279390bf36d6c70070aaf110c0",
".git/objects/e1/eab478bd97ed783fd87d9427675f22df125857": "d3ae2d8ac57fc24ee923127715130493",
".git/objects/e5/2de091e3edd7ba63b4a7eb0f3745c141c6acbb": "34543c31c726736ea08425f53635d65b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/5c55a5b595e20e25bd59a1c8bd161d5b13e8a3": "a790fab1222de456f3faf3ebd3e8b99d",
".git/objects/e8/464a227b7d7a6db30d6d6526e7befeb14184d3": "fa188a17ab6c93acba8298e693c46bfd",
".git/objects/e9/6d38280431646511b6bca94b7279c4fa0af851": "92bff772d580cbf303454acca5a16336",
".git/objects/e9/7490c62242ab3f708569009eaebc5c3ada206d": "67c6b73b572ff83954ecac8d5645b0c0",
".git/objects/ec/d41bf63ab8d99e6b39230a11f57ea26975efaa": "9e4035798e5810bc517479aff35f347a",
".git/objects/ed/fcc045ac1bca7671e476d5974292bc9b230f36": "060aad6606bc40b3c9768655bcc74446",
".git/objects/ee/3facef1b90359b4d3080161b6c72d1dea9726b": "ce69b553099743b863dcfe58ddfa81fe",
".git/objects/ee/ecd307528365aee50691a6f7abf1c7a5a2c6cf": "92b2f3945b68c7ebe6ce3a1005965096",
".git/objects/f1/66fbccd5dc5476e5c1c8b3aa7086ed27e9c91f": "11762352fc725fc6075ad02768a09b81",
".git/objects/f1/6b586918ae57b838e8c23711d7ff36727d69ca": "75d81a07f217b8831742764c638708b6",
".git/objects/f1/d7d64d47faa725f56ece5211de1698d72e7ee9": "c37d509d114e5e5544c73d7b7fb3f273",
".git/objects/f5/488159fc5e98783b23d7982106c8640cee719a": "592196322446f3799426bf8148a5b9b4",
".git/objects/f8/6172896bc962f097a13a6513bbce9c299da0f1": "5aac480d0411c47f6a97975ca75aa387",
".git/objects/fa/9a751b601348a881be493b9535e94b3499205c": "03327cdeb3d78bd0888802564bc4b0e0",
".git/objects/fd/fe08fb30958a760aab799be53f147c77bbf225": "88c62b10f565d8bada43476f4f50d595",
".git/objects/ff/95230166304fdd258831dda9b79fee6277e7ee": "bcab5ed06a225200d3b6911e62118694",
".git/refs/heads/master": "cd5478ad13a14e250259d7be88352804",
".git/refs/heads/v1": "2624c77ae7d82c27ea13c5ab56578e96",
".git/refs/heads/v2": "50e3566a0cdf7b4b3a45529aa4f0af84",
".git/refs/heads/v3": "7a8700e56ddc5df9f6a1cfa7484c686f",
".git/refs/heads/v4": "b9e7911d9f336ce55e8824437af64beb",
".git/refs/heads/v5": "0a8e291a8161ac67fc5151de93257b80",
".git/refs/heads/v6": "9dc6ae9f69f2e714d7027f2577c910e6",
".git/refs/heads/v7": "9dc6ae9f69f2e714d7027f2577c910e6",
".git/refs/remotes/origin/master": "002af7ea54aa423b8047a58145aab680",
".git/refs/remotes/origin/v1": "cd5478ad13a14e250259d7be88352804",
".git/refs/remotes/origin/v2": "2624c77ae7d82c27ea13c5ab56578e96",
".git/refs/remotes/origin/v3": "50e3566a0cdf7b4b3a45529aa4f0af84",
".git/refs/remotes/origin/v4": "7a8700e56ddc5df9f6a1cfa7484c686f",
".git/refs/remotes/origin/v5": "b9e7911d9f336ce55e8824437af64beb",
".git/refs/remotes/origin/v6": "0a8e291a8161ac67fc5151de93257b80",
".git/refs/remotes/origin/v7": "9dc6ae9f69f2e714d7027f2577c910e6",
"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"assets/AssetManifest.json": "9451c99d8e47806919a59af6f3f68f56",
"assets/AssetManifest.smcbin": "6308281d5a018a92c63dad5ce89853f7",
"assets/assets/FML-Indulekha-BoldItalic.otf": "a616c4e87a489f70f078acdfbece8a7f",
"assets/assets/FMLIN0BPS.otf": "681e5be9975fed6f81c1e9b54804ee98",
"assets/assets/FMLIN0IPS.otf": "562c30c452f6b3d2926fc1741b6134f9",
"assets/assets/FMLIN0NPS.otf": "f91a460243690f35d04519ccc06368e4",
"assets/assets/LOGO.jpg": "ca3a1daf33ff363c98ff6ec59acad49e",
"assets/assets/nepal-edited.jpg": "137cb83bf67cbadec68b4d481c87e7c9",
"assets/FontManifest.json": "59cde42baf916675185c17f057902ac7",
"assets/fonts/FML-Indulekha-BoldItalic.otf": "a616c4e87a489f70f078acdfbece8a7f",
"assets/fonts/MaterialIcons-Regular.otf": "a5f061034f0baaa7bd6426e0d40a0be4",
"assets/NOTICES": "63dd8948c333755d1d45507ce7d77a66",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "c013846172a148f9dd30c02b7dc55a6c",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "65733b81af69c46c8154276c565aa725",
"icons/Icon-512.png": "1958df69c213c118b32cd7425e3e1422",
"icons/Icon-maskable-192.png": "bba678b6a68e617f4ca55f3c5da6e83f",
"icons/Icon-maskable-512.png": "9cbf91c2a86144821505a087ef144951",
"index.html": "5076953a451b9529d479f559ec1255e8",
"/": "5076953a451b9529d479f559ec1255e8",
"main.dart.js": "d1911e69603889a2464cc241b59b6e4f",
"manifest.json": "e1c1a2606f134a2aceeeaff6f08167d5",
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
