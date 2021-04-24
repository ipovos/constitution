const {getArticlesDataByIds} = require('../../utils');

class Article {
  data() {
    return {
      number: 106,
      permalink: 'articles/106/index.html',
      description:
        'Президент України: забезпечує державну незалежність, національну безпеку і правонаступництво держави; звертається з посланнями до народу та із щорічними і позачерговими посланнями до Верховної Ради України про...',
    };
  }

  render(data) {
    const articles = data.collections.article;
    const articlesNumbers = [156, 83];
    const articlesData = getArticlesDataByIds(articlesNumbers, articles);

    return `
<p>Президент України:</p>
<ol>
    <li>
        <p>забезпечує державну незалежність, національну безпеку і правонаступництво держави;</p>
    </li>
    <li>
        <p>звертається з посланнями до народу та із щорічними і позачерговими посланнями до Верховної Ради України про
            внутрішнє
            і зовнішнє становище України;</p>
    </li>
    <li>
        <p>представляє державу в міжнародних відносинах, здійснює керівництво зовнішньополітичною діяльністю держави,
            веде
            переговори та укладає міжнародні договори України;</p>
    </li>
    <li>
        <p>приймає рішення про визнання іноземних держав;</p>
    </li>
    <li>
        <p>призначає та звільняє глав дипломатичних представництв України в інших державах і при міжнародних
            організаціях;
            приймає вірчі і відкличні грамоти дипломатичних представників іноземних держав;</p>
    </li>
    <li>
        <p>призначає всеукраїнський референдум щодо змін Конституції України відповідно до <a href="${articlesData[156].url}"  title="${articlesData[156].content}">статті 156</a> цієї Конституції,
            проголошує всеукраїнський референдум за народною ініціативою;</p>
    </li>
    <li>
        <p>призначає позачергові вибори до Верховної Ради України у строки, встановлені цією Конституцією;</p>
    </li>
    <li>
        <p>припиняє повноваження Верховної Ради України у випадках, передбачених цією Конституцією;</p>
    </li>
    <li>
        <p>вносить за пропозицією коаліції депутатських фракцій у Верховній Раді України, сформованої відповідно до
            <a href="${articlesData[83].url}"  title="${articlesData[83].content}">статті 83</a>
            Конституції України, подання про призначення Верховною Радою України Прем'єр-міністра України в строк не
            пізніше ніж
            на п'ятнадцятий день після одержання такої пропозиції;</p>
    </li>
    <li>
        <p>вносить до Верховної Ради України подання про призначення Міністра оборони України, Міністра закордонних
            справ
            України;</p>
    </li>
    <li>
        <p>призначає на посаду та звільняє з посади за згодою Верховної Ради України Генерального прокурора;</p>
    </li>
    <li>
        <p>призначає на посади та звільняє з посад половину складу Ради Національного банку України;</p>
    </li>
    <li>
        <p>призначає на посади та звільняє з посад половину складу Національної ради України з питань телебачення і
            радіомовлення;</p>
    </li>
    <li>
        <p>вносить до Верховної Ради України подання про призначення на посаду та звільнення з посади Голови Служби
            безпеки
            України;</p>
    </li>
    <li>
        <p>зупиняє дію актів Кабінету Міністрів України з мотивів невідповідності цій Конституції з одночасним
            зверненням до
            Конституційного Суду України щодо їх конституційності;</p>
    </li>
    <li>
        <p>скасовує акти Ради міністрів Автономної Республіки Крим;</p>
    </li>
    <li>
        <p>є Верховним Головнокомандувачем Збройних Сил України; призначає на посади та звільняє з посад вище
            командування
            Збройних Сил України, інших військових формувань; здійснює керівництво у сферах національної безпеки та
            оборони
            держави;</p>
    </li>
    <li>
        <p>очолює Раду національної безпеки і оборони України;</p>
    </li>
    <li>
        <p>вносить до Верховної Ради України подання про оголошення стану війни та у разі збройної агресії проти України
            приймає рішення про використання Збройних Сил України та інших утворених відповідно до законів України
            військових
            формувань;</p>
    </li>
    <li>
        <p>приймає відповідно до закону рішення про загальну або часткову мобілізацію та введення воєнного стану в
            Україні або
            в окремих її місцевостях у разі загрози нападу, небезпеки державній незалежності України;</p>
    </li>
    <li>
        <p>приймає у разі необхідності рішення про введення в Україні або в окремих її місцевостях надзвичайного стану,
            а також
            оголошує у разі необхідності окремі місцевості України зонами надзвичайної екологічної ситуації — з
            наступним
            затвердженням цих рішень Верховною Радою України;</p>
    </li>
    <li>
        <p>призначає на посади третину складу Конституційного Суду України;</p>
    </li>
</ol>
<p><em>{Пункт 23 частини першої статті 106 виключено на підставі
    Закону <a href="https://zakon.rada.gov.ua/laws/show/1401-19#n155">№ 1401-VIII від 02.06.2016</a>}</em></p>
<ol start="24">
    <li>
        <p>присвоює вищі військові звання, вищі дипломатичні ранги та інші вищі спеціальні звання і класні чини;</p>
    </li>
    <li>
        <p>нагороджує державними нагородами; встановлює президентські відзнаки та нагороджує ними;</p>
    </li>
    <li>
        <p>приймає рішення про прийняття до громадянства України та припинення громадянства України, про надання
            притулку в
            Україні;</p>
    </li>
    <li>
        <p>здійснює помилування;</p>
    </li>
    <li>
        <p>створює у межах коштів, передбачених у Державному бюджеті України, для здійснення своїх повноважень
            консультативні,
            дорадчі та інші допоміжні органи і служби;</p>
    </li>
    <li>
        <p>підписує закони, прийняті Верховною Радою України;</p>
    </li>
    <li>
        <p>має право вето щодо прийнятих Верховною Радою України законів (крім законів про внесення змін до Конституції
            України) з наступним поверненням їх на повторний розгляд Верховної Ради України;</p>
    </li>
    <li>
        <p>здійснює інші повноваження, визначені Конституцією України.</p>
    </li>
</ol>
<p>Президент України не може передавати свої повноваження іншим особам або органам.</p>
<p>Президент України на основі та на виконання Конституції і законів України видає укази і розпорядження, які є
    обов'язковими до виконання на території України.</p>
<p>Акти Президента України, видані в межах повноважень, передбачених пунктами 5, 18, 21 цієї статті, скріплюють
    підписами
    Прем'єр-міністр України і міністр, відповідальний за акт та його виконання.</p>
    `;
  }
}

module.exports = Article;
