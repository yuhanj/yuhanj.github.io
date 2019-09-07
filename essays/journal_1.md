---
layout: essay
type: essay
title: Is JavaScript easy to learn?
date: 2019-09-06
labels:
  - Software Engineering
  - Learning
  - JavaScript
---

First paragraph. Test the layout.Test the layout.Test the layout.Test the layout.Test the layout.Test the layout.Test the layout.Test the layout.

Second paragraph. Test the layout.Test the layout.Test the layout.Test the layout.Test the layout.Test the layout.Test the layout.Test the layout.Test the layout.Test the layout.Test the layout.Test the layout.Test the layout.Test the layout.Test the layout.Test the layout.Test the layout.Test the layout.Test the layout.

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

Test the layout.Test the layout.Test the layout.Test the layout.


```
A: datetime and the datetime.timedelta classes are your friend.

1. find today
2. use that to find the first day of this month.
3. use timedelta to backup a single day, to the last day of the previous month.
4. print the YYYYMM string you're looking for.

Like this:

 >>> import datetime
 >>> today = datetime.date.today()
 >>> first = datetime.date(day=1, month=today.month, year=today.year)
 >>> lastMonth = first - datetime.timedelta(days=1)
 >>> print lastMonth.strftime("%Y%m")
 201202
 >>>

```
