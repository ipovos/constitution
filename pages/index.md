---
permalink: /
layout: main.liquid
---

{% for article in collections.chapter-01 %}

## [Стаття {{ article.data.number }}]({{ article.url }})

{{ article.templateContent }}

{% endfor %}

{% for article in collections.chapter-02 %}

## [Стаття {{ article.data.number }}]({{ article.url }})

{{ article.templateContent }}

{% endfor %}