import { ComponentPropsWithoutRef, forwardRef } from 'react';
import * as React from 'react';

type IconProps = ComponentPropsWithoutRef<'svg'> & {
  /**
   * Hex color or color name or "default" to use the default hex for each icon
   */
  color?: string;
  /**
   * The size of the Icon.
   */
  size?: string | number;
  /**
   * The title provides an accessible short text description to the SVG
   */
  title?: string;
};

const ChatGLMLogo = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', ...res }, ref) => {
    return (
      <svg
        fill={color}
        height={size}
        ref={ref}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
        {...res}
      >
        <path
          d="M12.21419 3.14832c.81358.182 2.91843.75214 4.61373 2.61448.391.42909 1.5244 1.70353 1.95149 3.67635.07951.3689.1306.74315.1529 1.1196.02233.1537.03986.30395.05258.4545l-.02-.11958c.02809.12988.03511.26377.03511.39762l-.00123.04912A7.28134 7.28134 0 0 1 19 11.4746v.0212c-.0015.64365-.10027 1.2345-.26922 1.7129-.04111.0666-.08573.1327-.13532.1899a7.44719 7.44719 0 0 0 .08116-.73636 2.74105 2.74105 0 0 1-.09631.1688c-.0624.05883-.13254.11806-.20977.16896.0983-.34236.14658-.69259.14658-1.05119.0004-.66046-.17388-1.31723-.51712-1.94881.15212.06774.293.15092.41996.24685l-.06264-.2188a7.4618 7.4618 0 0 0-.60251-1.4155c-1.40357-2.54446-4.24084-4.27857-7.51417-4.27857-4.66738 0-8.44903 3.52593-8.44903 7.87502 0 4.3486 3.78215 7.875 8.44903 7.875l.1487-.00056.14804-.0039c.19352-.00445.387-.01775.58051-.0355.08974-.0089.17943-.01775.26968-.0311.28972-.0637.5563-.16836.7872-.30491A7.12443 7.12443 0 0 1 11 20c.93098-.2569 1.62204-1.04664 1.69552-2 .14022.23931.23399.51363.27718.80138a1.25787 1.25787 0 0 0 .0696-.30548 1.37467 1.37467 0 0 1 .13933.2219c.10278.20125.16194.43455.16194.6846a1.48706 1.48706 0 0 1-.00802.1361 3.16094 3.16094 0 0 0 .81258-.33045 4.55664 4.55664 0 0 0 .32833-.22145l.01103-.0079.0351-.0266c.08768-.0661.18594-.1401.30025-.2486a2.42868 2.42868 0 0 0 .17411-.17614c-.41727.278-.81728.50523-.78388.4688.0095-.00948.3936-.3694.52143-.54876.0856-.12352.15641-.24645.21348-.36938L14.979 18l-.06793-.00063a1.2927 1.2927 0 0 1-.08424-.0044c.12884-.29493.16403-.57715.0887-.7586-.01084-.13811-.09203-.25448-.20592-.31337l-1.2177.002L13 16.91814l.012-.03714-.012.00067C13.11546 16.3861 13.96423 16 14.99532 16h.13226c.3335 0 .65046.03736.93282.1036.42824.05712.79962.18027 1.06482.3435a1.0994 1.0994 0 0 1 .15737.1154c.01805.01285.0356.0306.05364.04835a.73002.73002 0 0 0 .09476.0222c.02256.00445.0401.00445.05815.00445a9.33154 9.33154 0 0 1 .98951 0l-.0205.10773c-.02306.11848-.0565.27646-.10985.45402-.40052 1.35385-1.29528 2.1903-1.60105 2.4734a6.26358 6.26358 0 0 1-.67426.53514c-1.47024 1.0308-3.04422 1.42485-3.543 1.5398-.44114.1016-3.03576.65-5.72457-.2831C3.38818 20.2788-.0967 16.76125.00205 12.31945.0963 8.1652 3.2754 5.61286 3.95813 5.095c3.5616-2.70325 7.5994-2.0616 8.25606-1.94668ZM9.26573 6.01876a2.166 2.166 0 0 1 .52399.03712c.45786.0902.87553.32815 1.19196.67906 1.88955-.1148 3.60826 1.11653 4.152 2.9746l.09999.67506.00145.01044.02511.1425.00387.01139.03864.2574.36415 2.41085.0087.0693.03864.25042.01739.1287v.0267l.00048.02328c.04739.34777.33735.60672.68.60728.25645 0 .47618-.14652.59597-.35831l.0058-.01485.0483-.11536.07728-.1866a.14474.14474 0 0 1 .03333-.04947c.04197-.04426.10597-.05796.16176-.03462l.04782.02222.2236.1.31783.13513.013.00888c.0565.04455.07824.11535.05216.17772l-.09753.23854-.00241.00988c-.0343.13367-.08212.25344-.14732.36874-.00532.00894-.00628.0114-.0087.0134a.2704.2704 0 0 0-.00676.01089l-.0145.02474c-.29894.48404-.84084.81666-1.39043.81666h-.3685c-.66175-.002-1.24384-.44862-1.43198-1.0988l-.00628-.02474a.46707.46707 0 0 1-.01111-.04205l.00676.03809a.47749.47749 0 0 1-.0111-.04255l-.00242-.01089c-.01174-.02925-.01754-.059-.02126-.08911l-.08694-.39052-.00435-.01781a.48024.48024 0 0 1-.0169-.07522L14.349 13.655l.00087.04623a.06384.06384 0 0 1-.00241-.03217c-.00106-.01164-.0017-.01645-.00193-.02132 0-.00788 0-.01731-.00097-.0267l-.00338-.0173-.00483-.02228v-.0134c-.01546.00497-.0169.00597-.0169.00843l-.00677-.03512-.00193-.0124-.00435-.02323c-.06298-.29247-.23924-.54616-.48829-.70286-.1649-.098-.35217-.14958-.54282-.14943-.03478 0-.06956 0-.10385.00442-.0174 0-.03478 0-.05217.00447a1.52867 1.52867 0 0 0-.15167.03562l-.0386.0134a1.0798 1.0798 0 0 0-.06955.02619.14955.14955 0 0 0-.02705.01089.86842.86842 0 0 0-.04444.02278l-.02801.01535-.03478.02228-.03865.02674c-.00483 0-.00917.00442-.01352.00888a.09455.09455 0 0 0-.03478.02228l-.01932.01536-.01932.01535-.02008.01454-.01851.01662c-.01353.00893-.02657.02228-.03526.03116l-.03044.0312-.01062.01335a.11634.11634 0 0 1-.01063.01335c0 .00447-.00483.00893-.0087.0134a.09682.09682 0 0 0-.01738.02177.13489.13489 0 0 0-.01304.01586.1837.1837 0 0 1-.01305.0153.2481.2481 0 0 0-.02608.03563.24694.24694 0 0 0-.02898.0426.07858.07858 0 0 1-.0145.02373.18268.18268 0 0 1-.02124.0401c-.00483.00692-.00773.01339-.01111.01981a.1088.1088 0 0 1-.01063.01977c-.00338.00943-.00435.0119-.00435.0139l-.0087.01977c-.00337.00692-.00675.0134-.00869.01982a.18703.18703 0 0 1-.0087.02473.16986.16986 0 0 0-.00869.02474l-.00627.02624-.00677.02228-.00628.0292c-.00241.00743-.00483.01486-.00676.02424a.79528.79528 0 0 0-.013.04852c-.00192.01294-.00337.02102-.00434.0292-.00097.00743-.00193.01485-.00435.02424-.00434.0178-.0087.03562-.0087.05343a.2379.2379 0 0 1-.00192.02625l-.00242.02674-.0029.01335-.00126.01337-.00019 1.92236h-.01255v.68796c-.00189.37452-.2977.67768-.66315.67954H9.83995c-.36545-.00136-.6615-.30452-.6631-.67903v-.86022c-.0739-.57707-.5717-.9967-1.13849-.95961-.56678.03708-1.0085.51811-1.0102 1.10015v.03121h-.01304v.69293c.00063.18028-.06898.35339-.19336.48089-.12442.1275-.29334.1988-.46926.19815H4.66262c-.36548-.00161-.6613-.30503-.66262-.67954v-4.21297a.7564.7564 0 0 1 .00531-.08806c.04202-1.4566 1.12287-2.65094 2.50756-2.838 0 .03116.00434.06684.0087.098.04004.2316.09703.45288.15451.67511.03478.13508.06956.2702.10095.40783.06376.27963.14776.51722.24002.77903l.0628.18014c.11592.33903.23808.58354.35497.81716l.04396.08861c.0854.1837.18384.36067.2946.52956l.02608.03863c.03477.05344.06907.0975.10385.14205l.02415.03066a2.25265 2.25265 0 0 0 .05791.06287c.13912.13758.40328.36824.81043.49689.1478.04656.29508.05248.44288.03864l1.58312-.79243-1.6179-1.71496c-.10433.3306-.26465.56422-.46607.64887l.56026 1.01957a.43515.43515 0 0 1-.2415.05941.6076.6076 0 0 1-.27046-.0871c-.0338-.0109-.05989-.02429-.08163-.0421-.1094-.07476-.2048-.16914-.28155-.27863-.3086-.36723-.59741-.9567-.79207-1.65956-.0058-.02173-.00966-.03608-.01352-.05048-.00425-.01184-.0084-.02373-.01256-.03563l-.00913-.00888a9.51322 9.51322 0 0 1-.0116-.05052 4.55703 4.55703 0 0 1-.17533-.70477c-.0768-.26975-.1222-.54296-.16418-.81667l-.00339-.02127a.7477.7477 0 0 1-.00966-.06287l-.1251-1.69615c-.01976-.30142.07825-.59852.27238-.82587.19413-.22735.46844-.3663.7626-.38624l.8452-.0574c.0951-.00694.18882-.0015.27914.01583Zm13.0087 8.05826c.24288.03651.5803.09212.66994.3092.06417.15179-.00996.34577-.1339.4708-.20907.19804-.54656.16617-1.31547.05038-1.14618-.1703-1.71654-.25824-1.71654-.36423 0-.10833.3817-.19419.98978-.33095l.04747-.0107c.20797-.04631.47132-.09675.78883-.1245.26772-.02316.44145-.03703.66989 0Zm-.70917.23973c-.21505.0146-.38695.03776-.45527.047-.01848.0025-.02938.00396-.03154.00396a119.2401 119.2401 0 0 1-.11646.0172c-.41848.06182-.62756.09264-.62756.13046 0 .05471.37959.08648 1.13025.14928l.03585.00302c.54546.04168.82314.05091.88289-.06947.02987-.05503 0-.1245-.0343-.16618-.0155-.02264-.0747-.0967-.38723-.11986-.13444-.00929-.24836-.00465-.39663.00459Zm2.08882-3.4384c.14086.07787.29849.16503.33743.32307.09904.40132-.6898.91843-1.27066 1.14428a4.62762 4.62762 0 0 1-.24338.08335c-.07496.02514-.18185.06092-.31751.08747-.13157.02916-.2441.04246-.32864.05247-.10346.01231-.16487.01956-.16758.04475-.00365.01988.03181.03474.08565.05727.08415.03526.213.0892.3071.21031l.0057.00788c.0327.04532.10241.14192.08836.25036-.00996.08747-.08465.21714-.5709.40648-.27088.10964-.5537.19158-.84361.24442l-.1378.02357-.28126.04407c-.56309.08314-1.1014.13277-1.10937.08461-.00249-.01382.03558-.02634.12709-.05654l.06207-.02058c.09176-.03074.22005-.07544.39165-.14409a4.80878 4.80878 0 0 0 .52554-.24494c.12526-.06853.22412-.13352.3055-.18704l.01755-.01153c.17372-.11527.27773-.19346.3076-.21661.07907-.0602.18806-.15231.27769-.27681.04426-.06484.05975-.09723.06473-.12967.01029-.04246.00597-.07303.0021-.10025-.0036-.0255-.00675-.04804.00288-.07464.0285-.0676.10943-.09572.15048-.11.3059-.1025.72245-.32428.9011-.43486.18865-.11527.32747-.2079.38224-.3782.05477-.17078.01992-.41108-.10396-.45687-.01123-.00391-.02434-.00668-.03812-.00965-.0353-.00751-.07469-.0159-.09577-.0459-.02478-.03688-.00575-.08288-.0001-.09655l.0212-.03302c.12667-.1423.69759-.27645 1.145-.03661Zm-2.88816-.8443c.15463.07818.17211.27618.18196.38764l.00172.01878c.013.18266-.02999.36501-.12393.52582-.64062 1.14015-.7645 1.30586-.7645 1.30586-.7346 1.05268-.9725 1.26466-1.04222 1.2281-.04476-.02097-.00691-.13223.07862-.38333.06545-.19225.15884-.4664.2644-.84477 0 0 .2821-1.01512.6992-1.87335.0389-.07772.12366-.24708.31752-.337.04465-.02076.23536-.1096.38723-.02775Zm-7.34758-.90838-.10813.01241c-.32542.06418-.56017.3566-.55896.6962-.0016.12749.03154.25293.09564.36226.01266-.1722.08545-.33397.20524-.45534.1251-.1287.29846-.20884.49167-.20884.2402.00171.4627.12976.5892.339v-.0282c0-.098-.0174-.18661-.05169-.2712-.09475-.24564-.31175-.41043-.5566-.44137l-.10637-.00492Z"
          fillRule="nonzero"
        />
      </svg>
    );
  },
);

export default ChatGLMLogo;
