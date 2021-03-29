---
tags: no
permalink: /
layout: main.liquid
---

{% for article in collections.article %}

## Стаття {{ article.data.number }}

{{ article.templateContent }}

{% endfor %}
