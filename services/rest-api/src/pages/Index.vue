<template>
  <div class="q-pa-md">
    <q-carousel
            v-model="slide"
            transition-prev="slide-right"
            transition-next="slide-left"
            animated
            control-color="primary"
            class="rounded-borders"
    >

      <q-carousel-slide name="style" class="column no-wrap">

        <div class="q-mt-md">
            <h3>Coin Gecko Datafeed</h3>
            <div width="50px" height="60px" style="width: 10%;">
                <q-img src="https://static.coingecko.com/s/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png"></q-img>
            </div>
<!--          -->
          {{ coingecko }}
            <br/>
<!--          <zap-bond-widget :address=coinGeckoOracle endpoint="(Oracles.cc) CoinGecko USDprice"></zap-bond-widget>-->

            <zap-bond-widget :address=coinGeckoOracle endpoint="CoinCap.io Datafeed"></zap-bond-widget>


        </div>
      </q-carousel-slide>
<!--      <q-carousel-slide name="layers" class="column no-wrap flex-center">-->
<!--        <div class="q-mt-md text-center">-->
<!--          <q-img size="56px" src="https://www.ideasbynature.com/wp-content/uploads/2018/07/coincap-logo-grey.jpg"></q-img>-->
<!--          {{ coincap }}-->
<!--        </div>-->
<!--      </q-carousel-slide>-->
<!--      <q-carousel-slide name="style" class="column no-wrap flex-center">-->

<!--        <div class="q-mt-md text-center">-->
<!--          <q-img size="56px" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFRUXGRgYGRgYGR0bIBofGB0XGx4gGx4aHSggHB4lHR0dITEiJikrMS4uHx8zODMtNygtLysBCgoKDg0OGxAQGzAlICUvLS8uNS0tLS0tLS0tLTUtLS4tLy0vLS0tLS0tLS0tLS8tLS8tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAABgMEBQcCAQj/xABKEAACAQIEAwUEBwQHBQgDAAABAgMAEQQSITEFQVEGEyJhcQcygZEUI0JSobHBYnKC8DNDc5Ky0eEVU6KzwiQ0Y2SDk9LxRKPD/8QAGQEAAgMBAAAAAAAAAAAAAAAAAAMBAgQF/8QAMhEAAgECBAMGBgICAwAAAAAAAAECAxEEEiExQVHwBRNhkaHBIjJxgbHRFPEjQjNi4f/aAAwDAQACEQMRAD8A7jRRRQAUUUUAFFFFABRRRQAUUVDicUkYu7qg6sQPzqG0ldgTUVg4ntXAui55D+yunza34XrPn7UzMCI4QvRma9vgAB+NZZ46hDeXlqMVKb4Gtx7jsUClXN2IOg5XHPpXJcEUFrE7it+fhMkrFnJJNRjgajmB8bVya2NVXe/2NEaaiZOLZep3POuldjOLRPh4og1mVFWx52HL/Leks8FU/aB+Ne4+DOhutxVaGMVHb1CUFI6pRSbg+0k8YCyRiS3O+U/HQ3rSw/a2E++rx+ouP+G5/CutTx9Cf+1vrp/4Z3SkhgoqvhMdHKLxur+hvb1G4qxWxNNXQu1goooqQCiiigAooooAKKKKACiiigAooooAKKKKACiiq+OxqRLnkYKPz8gNyfKobSV2CVyxWZxPjsMOhbM/3F1Px5D40u8R49LNcR3hi5m9mI8z9kenzrBGJUC8QUrzmkuI7/s/akPpYHrXKrdpXeWir+L2HxpJayN7F8exEt8toU5kam3mx0HwA9awxPGxJXvMQ3Nl8Q+MjELb0Jr7isCwVZZw2Quq95MvhUsdGWBSLAfecg+tb/EuHQ4cQ96j4lpZVhXOQEUuGIugstriw8JNyNedZlhq1d3qPz/X9Fu8UflQvLiXOi90ttCEDTsPUrZFPrer8fAsU+4n9XlSEfKEFvnTF2lwKzYGWOMAWUlQBazRnNYAbG62qrjO18cGBjxkt8pRGYgEgG6hhpezHxZb2BIsSL1phgaadn17+pRzbVzHxvZIpE8kiQEIrOQe8mJygnTOy3NRf7GgjwgxksuHhhyLIScMPCGtYf0hJNyBYXudq0eynbKLicEojBJCZH8JFmKEkm+mUk2UAkmxJ0pe47xJDwXCxNDLM8zKkQjVGBlhcuiuJDYqxS1srXF9K0LDU1K1iuZ2L3Z7h2Fx8ZkwuIw8qqcrXwmUg+aswI9ba0cH7OCZGeJIAFd0914iShsSCjtpVD2U4hcPPLhpMHNhsRKgksY0RBDDcKTlbMWzuwzEEnw3JtW5wHjEeF4VHPLIkfeOwDObDNJKVvuCbDxEA7Kdt6JYanmtYFJ2IpOz2KTYS/8ApziUf3cQBVGaaVCQ5Q20tMjQm5/bF4z8q3+AY7Ed9GkmI72ORcwV4kEihVIa8kT929nFmKrbxJY2NQ8D4jDHDjeI4hgsUkjHMeccfgQeZJuoHM2FIqYGm3Zde/qWU2YryoLF0eE8n95fg6Xt6m1bGB41iIwCHE8Z2ub3Hk4/W9ScDl4bxFXkwUmUrYP3V4ypa9s8bDKb2OpU3sdaycRwsrPLHDdpIwrO8AyMM22eM3jkNuW/QVmlhKtF3pvy/X9l1UUtxy4b2jhlIU/Vv91+fodj+B8q2a5acRcHvVDKNDJGpuv9rEfEh9L+grX4ZxiWEAqwmhOwvfT9hv029KdR7ScXlrL7r3XX0KuknrEe6Kp8M4nHOuaM7bqdCvqP5FXK60ZKSvF3QlprRhRRRViAooooAKKKKACiiigAoorI4/xkQLZbNK3ur0/aby/P5kUqVI04uUtkSk27I98b40mHFvekPuoPzPQUlY/FszCScl3bRI1Gp8kXkOpPxNeJ5mDXP1k7+LxHQD7zn7KD8bWHO17gHAWmvIzN3be9J7rzDon+7h6W1PLe9cOdSrjJWWkeXu+vpzNGlNeJkThmVpJQCkZGYAM0URuAM5UXmcXGmw093enHCYTCYZVmlmjLEXWaVlUWt/VgnKi2PLW1rk1srhYxH3YRRHlK5bDLY7i3Sk3DQiMnAvIwgmDfRJwfEt9GjDEGxsTlYciCDci2+jh4UrC22y5Fx/C49p8MJYWib6pCrhmdwCWYAHRAbBSdyrHbKTmYgyz4FIShkxGExWGDqBcsIpkObXcGO5ud7NWf237aScLxGHjyxfRO5KiBBZwyhlXUkLHHcKt7nQPYG160eM4F0EUk8mmLg+i4t4tAGkSyyLy0OlzpYDrWiWjUiq10Ndu2OBEuRJwQGCOUjd41OgAaRF7tCNBctoLX5WwIuysWLhxOAl07mYqNgRHIwkVg2UtmHiIFwpJ8QIpgyA4WbAd0oZcPIgWIXRlylLKPsMbjwNrqbFgCagkxiw8R70kKssNpEDBmV0PhLKpLE5dNAeep3ok7WYLkV+wPs/i4cLrdmbKxLZWN7EEe74QpuQVIvmIN7A0odo8bDh+GYY4hGkjhxc6ZVOVs3dYrJlYaoQ7Kcw1Fr610mXtNGPdimf8AhVP+ayn8KSMRwnDYlJI8TB3yjESzKonKZDIF0YRkgkDmdrm25ut16eZO5OV2Fv2adphiZXlkzti48HjTPKxv3i5sL3VvuhQrDKBa9zuxrK9oAkb6EgUyJBhkdYx7oeUu5eQ7KtlGh97KQOdOmG7OYHDLK+Hw3cu8TxF/pDsArixurkA/GnLhXHEjijiaKUBEVLgIwOUAbI7Ny6VP8inmvcMrsc27AdlcRw7C4vH4nKss0XdxBWVzaVgcxKErqcpFidjW5ju0HdzRcIghEk+HjjlIcrllbJndAr2BOVzICWGq+VMXHuIRYmXCQq1k77vJMwKaRi4Uq4B8R00FR9tvZrheIyrO7ywzBcheMjxrqLMCDyJFxbQ2N9LXjJSlchqyIezXH4GixXET3HeKqRSLCQfFFny5iCVJYvYZWYAWAdrXrFwvtFwHDkZZ3klxbyFsQkSElGbWxLlVsospAYkEkW3to8N7NYeCSLh0F+4gP0nEu5BLvYZA50GwBtYC3pSR254dg8RxjEYTIHlnGfvkLZoZFiGWMRqCJLst3sLkSfZKEmVaUrg9EdW4ZNheKYePFxZlzAhXFlkQqSCrWuDY/ZNxzpWni7uSXu3W6OFeRVPdMxG0q7I3LOptcWJ5VldgeF4/hsM2AYKJ8RLeHK4YKuXK8xt7qkBct7HQ6aWPSezWGjjiaBI3URsUYyAfWkgFm0JuDfnysLUitQhVdvUlOwpYac57peGdRcrfl1U7Oh6+lwKcOBceE31bgJKOXJvNf8vzrD4/2ayDPEGManNlX34T96HmV6x9L26VjxS5yqsQJLZo5E0WQDXMnRhuV5bjnbmxdXBz01jy/Q7SorM6fRWD2c453v1Uuko2O2cDmP2uo+I523q7dGrGrBTjsZ5RcXZhRRRTSoUUUUAFFFeXcAEk2AFyTytQBT4zxJYIy51J0VfvH/LmTSFiMQ187fWTyk5VO2m5PRFG/wABuas8V4kJnadyREg8A8vT7zG2noKzo7XMmIDBCVE5RS3dqdUhuNhbV28+rCuBXqvFVcsflXr49e5qSyLxNfs3wLvrySHNETdid8Qw5npCuwX7Vum9yZpeHOXu8uDdiWvdmgLHU9WQn+b+8wfTYhCJFYd3YZSgLDoAoQEnWwsBXD+1vtmmGJjXCGOSGK4kJU5cQWBB0PiCAHTz11Fq6lKgoxtES5czpvHeNzPKMLh4wyTJCVmUF/DLIVlbxR90AkSu3iY6lBlOa1a2L7OQvhFwouqooEbXJZCvutcm5PXXW5pd4Ximw0MWMgRmwM6JK8O7Qd4A2ZOqi+o/+6bJuMQrEs2cMj+5l1Lk8lHM76crG9rGrOStZhYU4eD4fiHew49CcRHGIZQGKh1VxIkq2trcbjqQRZrVb4jiMOcL9DgTPCI1iVsxCKEAC5XNzIVsCCARpqRWdxuZ5iZTGhYDKI+qg3yuw987m3uA20Nr1EmLzqGQE3F9Ra3l5nyHzrLKvJrLHzGKHFksWOeVSjSSMIzkKk5B4QNwpuwIsfEzXqpi3sqiIgZXU5U0Ui9iDl8Ox587V8hCFizDVgpJOg8rjb0Oo8+VaQSkuN3eRdJLYyMRxuNJ0gYZXcOVzEAeDKSLi+tmvboD5Xs4WFgzsChDkHmbWAG/Pauce1eGeHE4WWJWCL/RkC9pMxYj4+EgHfW21dJiS6i4DSsAWI0CnnqNQAbgDc29TTZU0op8yFK7aPGLgeWMr4RmG+ule5MWBe4BtvlbMR6iwtXyLDgKFe7A6BiTz5HWwPQj89/UcRbbQDTONMw6Wtb4/Lc2plRYgjmJkfOSEyqoVvdJ1JJGq31A1q6uLOHQujtGqi9l1X0yNddf2cp869pCFFgLAcqz8XEjWAH2gbjYlTfRRo5/AczpVcmt0Q7M2Oz2NSHvTOpYzsXeW1xqPddPeRRcj7SjW5FR4vs5wzBZsdHDHlcD6pVR0lbeMxgqcjA6/V2G5INgRRw2KJUMwyg6hhtbkT0uNeY86jwD5nEyotkfNGGvlc7Fio90k7OBfQEg2FNhXlDSXX7KShxGThcH0WGfH4vWYo0sttciIC3dqPID4m29hWP7Oe2jYuaWGWAwyMgxKjMGBViEYabZTk3sTc6C1NmExkWLjeNl3UrLE9r2cEEHkysL2I0OvmAk4DgkXfSRcPzBQoimxOhKxrciGDKACdfe1O1ybCtcZRy6C9Wxh4nxOTFSNhcG2ULpPiBsg5qnVz+H4ipx3sysceaLO0YAMi3JcFf66M75xuwG+413zcb2tbh8RiTh0sUeU9w8jRqJGUXcOA+bPzVR4nswAGWm3sviMVJD3mKVUdmbKgQoVQGylgXY3YDPY+7my8r1WdJTjaQX5CbDKX0LATIA6uugkXlIn6jkfIinjs9xfv0s2kiaOOvRh5H8DSTxfuTMy4ZwQrBlYAlIZWuMubYpJsRfQm3OwkwWOKlcRGLMpKyJ0I95D+YP7prlU5ywlX/q9/319B1s8bcTpFFQ4TErIiuhurC4/nrU1d9NNXRlCiiipAKWu2OPNlw6nV9X/d6fE/gD1pjkcAEk2AFyegFc3xmPJMuJIuzGyKepsqL+V/ia53aNZwp5I7y0+3EdRjd3fAhkBeQIgzCNgqryeZhpf9mNfEfj92nTDNh8IsWGeRc8ua2beVtM7H1ZgNdNVUchSvwWKWC0yQNiFiLRkqRmzHWWQA++Sxy6dG61ocXm4bxGB1nAYxqxKtGO+jAsXCKVLAkLY5Lnob2qmCpRhG73f4CbbZT4sIsJJCcJMifSyckDXME9wDZX9yNmBAXUBrgDpWFhvZ9wjG4ku0cuGmBvJhMwRSeZUZb5T+wRy0FUYw+OxMPDsFipJuHR93NLnWzwCNwVhEpTNcWUhT4haxOhrqPaDg8E6ZpfAUBYSqcrR21uG6Dex0rY04/KUvfcnxuJjw0Q8NlACJGoGullRRtsPQAEnQUgygw+NY1y3YuqX8AYgkRg7jrzbTYAKJJ+IuMjTs7jLlEhUDIp2LqPdZ9CTyAUE7kzIM5v9ke6Ovmf0+fphqT7x6bddeo6MbHlD3nPw7WG5/e6fu/PpVpVqm2HCtta5uCNNTuL9b6i+h2Owq3hpL6HcfC4625HkRyPwqLW2LESwi+Q6blCNx1A9OnS2+tEcRU5b5Ty0ureg+yfIEddeVySEEW+II3B6iozr4JNCdiNATyseTeXyvUXAVvaPxg4bB5iiFzJGI7+IZlYPcg22Cnryq/2a44mLgXERqys2jplYjMtrgkA+Vm3sRcchk+1nC5+HPm96F45L9QTkv8A8eo5H4Vm+wvFXgxEXNZFf++tv+inZU6Wbkyl/jsPMLZ1GZWy293K2v7xta3l8+lWczHZLfvED8r/AKVYgXwj0r5O1hoLk6AdT/lzNIuMKU0Z2Jzk/Z2Uebc7epN+lQYiPURg3Zhdm6J5dAdgPX1q1NKI1b7Tbtbryv06BdzyvX3B4cqLvrI2rnz6DyUaD57k1a5AZLaCq0gyai2XmpNv7t9j5belW52sOpOgHn/lbX4VRkT+JjsTz/8Aig/Hzv4jfcCDvu+JCXCBWXvQSD4hqq21ZT9oacragGnXsvNF3IijQRmOwaMG9r7MDuytqQ3PW+oICp3WSxXUAAEdQNL+v5/Ko4uJMJL4c3kUMA1rpqPcc3FwTbQbEA9aIT7uV+BWUboYO3UMLJF9IlMcKuZCqEiSR0H1YQqbjK5z3HNVvpes3/aP06YwTYiPCoLXwokUTyA2I7wXugII8Nufoav8J4WBEcbc4zFFGZC9l8QBtGgPhj8XhPQ32riXazBPjFYy4hJuIRLLNMI4olSOONBnSR41DNIjLlBJYG6gHet8Vn32Et22O29nON8Mxiy4PCOjrGCHRVZdCbZlJAza/bBOtjfUGsDERtBMwkN9VjlP3gf6Kb4+63x+7Xv2acEwXDsDDi3yxTTwozu7G5DWeyqfgSANbDpVrjeOGK+uTDy9wqlJJXGUOjkDwqdWCk5s3Kzaa1mxlKM4WW6LQbWpp9k8YY5Gw7bNdk8iPeHxGvwPWm6uYQSPkBv9bA2UnqUsVbzzLYn1NdIwGKEsaSLswB9Oo+B0qnZlZuLpPeP4JrR/2XEnooorqCTD7YYrJh8g3kIT4bt+At8aSsUxDoqi/dL3lusjkxxD1vmNvMUwdq5c+Jjj5It/i5/yA+dYfC1kklzxIHcyPMFY2DLh7RJry8RDVwcQ++xVuC0/fuaV8MBsxWJGAw8MYUOzMkSgtlzu2ZmN7HU2cgW1Nhpe45/xTtVhsVihO74d+HErhxI2eOVJVBcsG7sEDKRoxykKLa3FO0nahox/2nBzREahgO9QHzZNvl1pP7OcCMyLm4tGZFfvFWFe6DFmu4miJUSg7XyBh1NgK6ycWrCbMa8LHjIkWTDTDGwMAypKcr5TqMsn2r/tVBxbj3fKsbRvDreVZbKSQfAg11DMC3mEItY03RosaAXsqKBcknRRzJ1OnM0gzsJQ0kigiQmQhhsCPACD92MKPW9Z8RLLHKuJeCuzzipORuRu3odh8Tv5XqaKUE22PQ6fLkfhVfDYMCMLa3PrYnlrvYaW6aVJhjcZHHOwvrqNbettQeYtzvSErIaXMgIsRcHlVVsKe88LMLLqL7huQO493e/T4TglNzdOp3X16jz5c+olbwtmPukAHyIvqfLXflYfCLknyPDoRcXB6gkEHz6/G9Swi4KtY2NjpoRYEG3ofnevLyr7wZb+t83lpqfK3+lS4PXMxFiTsd1sAAD58/jVGwMXthwjvcFiEUm/dOVXcXAJA11FyBzsNNNK5d7EcYy4ySMWIkiJsTbVGUjkeRau65L6HY1+duw5+i8ZijJ92d4D55s0Qv8AEitNB5qc4i56STO+Qd5lHhXb7x/+P61FDAznOzaHRQvh8PW9ydd9CNLVadboq/e0+Gpb8AR6kVHxXEmNBlAMjkRxKdixva/7KgFjb7KtWW4wpSWLkKPBERoNM0jWyj+G4J82XmpqycPzZiTz1KgegB29dfOvS4IRwhAb5fFmbTMwbOWbldmuSfM0RuH12A+ydD/EOXkPj6WuBQmgOZTmOTVbHU62111tcW1vv0qwsIFzqSdydz/PQaVJKQ5AXUAgseQtqB63tp0+FeJGJJVdLbt08h1P5fhVrkEU0gG+/IDU/Ia1Vw76kWIUk2vbcbjTrqfgamlst1XTm7bkfHcseXT5XibC3Uj3SRYW0yW2At06/wClS1dAaPDONLhmfPmKPrlUZmEnkB99R6XQ/eqWXE4qRXlVIuHw2LPNKFMmUakkbL55j8axsLhVVfqgFY2YE6nOpuuYnU2Ya/Gtrt3h2x3CJu6DlnjSRVUXa6Mj5bc7FbEC50NgTYF2Gd1kvsKmrEfZPh0Ez/SBHJMlvDiMTctKTYho0b3YwL2YgE300Fy2O0cmeIlW0s63BNmuNRyvYj4GuR4zstxKIiWfjslpNJIw/dkIw3jV3ChgbaBQQMxFyLFl7L4jh+BjMPD4Z5yT4mRGYseru1h8tPKtLyxKaspJEY5sjak5oHPVortGx6ZoyfmKaexWJ8MkJ+w2YejX/UE/GlntBJMzPLJhzAxVZkUsGLHDFbk5diUYC3lWpwScJi0I92QFfmMw/ED51yIPucWuT089vbyHfNBoeKKKK75mOfcVxVp8TN9zOf8A21t/01e7CYTKW/8ADihjHqQzt+a1g8Qa8OIP32I/9xwP+qtrhGPmh77u8I86NKxLK6i2VUTLlOp929/OuBg3mrSm+bfXmaamyQk+0X2jTRSssckscSySQosJRWkMJUSO8kiPlUOSiqq65WJI0BbOxXFsFxnDd5JBD3y3Ekd7uouQpLBVbxAXuNKzOIcHwkk3fTYDiCuJziFKoGVHYJmAtplZkDkG/iva1yKzuw/BsDwvFviFnxIVomiyTYdgRdka5dND7trZeddhyg1qJSY3ca7OpBF9TPOiuVjMXeFkIc5W0bUWXMd+VY2IaQHxNH3bMdbEEDU66kEWFidK2ON9oMPiBH3UoZY2Z2NitrIyi+YDm9ZayJIbKysMrA5SD71hy8r1gq2dTTYdDbUs4WXMOh5j+eR5GvUkYzC40bwn1Gqny5j4jpVXDqxsw98e8x2J+4PK/Pl5m9WmlDRll5a/FfFb8KhliVXK6PqvJv0bp67HyqbDjKcnTVfTp8Dp6Fa9qKgmhKZWTYMBlO1m8Oh3Uag21Gg0FUJLyIN7a16MfMaH8/I/zp8wY48QL2N1PRtL+h2PwNW1FLYHmJr+RG46V+dfaGhwvGZXA2ljnXzuEkP/ABXr9GmK+o0PX9D5VxT288JYTQ4sDwsghcfddczLc8wyk2/cNaMHJd5bmhdVaHYMGQ5DDUBBb+PU/gF+dZ2DnWSRsW7BYlvFAWNgQSA8mth43AVd/CoI981htxJYOH4eCSYRNJEollzW7uOJI45WB3zkgIltczggHKa5j2+7Y/TSsMK91g4bCOO1r5RlDMBtYaBeQ8zRSoOb0JlNI79kJ1Og5D9T+g5eu3iaFW95QfUA/nXLPY52qlaQ4GVi65C0RY3K5bXW53W2o6W89OpyzgGw8R6Lr8+Q+JFLqU3TllZaLurkGINgFXQnQeXU/AfoOdV+WWPYaFt7dbfea/Prv0r33Rd2L6BQFyg9bMbnnpl0H41MVttQiSi0YuqDYeI+t9L9bm5v1WvszAC5/n0869Kw8bHa9r+SgD871Uk8Vnb3Dtbdf2tP5HxNXRBVSaUlhGE3uSxbw5uVgNTe99RrWxwXg5n7xXxM6IjXEUbZFIkAcm4FyC5cW8qzYmC5WYgZlYknTcgj8Ca0+BcYghkd3lQIyKM17jNGz6ac7SflUw0qLrx9is9iTjnCMHgYDMBhobHWXEq0tib6qC12booIvSn7MO2mMxOMETTfSYHEp/o4ozAELZCRGb+IBQQVt4hYmxpw412swcsLxx4hQ7AhW7hpQp65CAG9L0jdgez2H4bimxEZxmJvFkULhiLFiCxPi10At6nyrcpQSEtM6P2vhusLdJMh/dlVkP45aUsBLliw784yoP8A6LZT/hrZ49x15YCBg8TGA0bZ5EChcjo2ovflb41jFPq5l+7NKPnZv+quR2hpJSXVh1Lex1Gik/8A26etFdX+XAX3TFmf/ux/tIP+bHTx2T/oW/tpv8bUk4tbQSD7rof7kqH9K3+FccMIkjGGxEx72Q3iTMozG9ib6HW9uhFcrs52k7+PsNrbnjtN2nlX6THEAhhyrn3JLKrXF9Bo1ufWtns7xWSZpUcf0eWxKshN2lQ6MBcXjuCBqDWLxvHGaN+84dIARYu8kcRA5XYnl56V74PxHEMpfDYGDK1gXGKR722uyXva/XmetdfMhFi12rUd7DoP6Ob/ABYesJFAc2Ue6u1hzarvGTjGZGnSFDlkWPKWbU5GObbkmlvOs6AurEyMp8N/CCLBSb7k9awz/wCR9cB0Nj6jEsUIshJ5jxHcrf1vpz+BqxiGI1C6nQi41H6WGt/hzqGJ7IAwzK3TcMdSPXNex5c7WvU5jIjYk3cjLf10A+Z351DLFvDO2VfCdhzHSvWKc5G8PLqKJJlRSzsERRcsxAAA5knQCufdqvalCgMeEXvmuPrGuIxY8h7z7eQ6E1EYSm/hQOSW50THY5Io2eYqkY3Z2UD01P4VzLtH7VlW6YBCD/vJPd/gjP5nL6Guc8a43iMW+fEStIeQOir+6o0X4Vn1sp4SK1lr+BMqr4HRsJ7ZMaos8OHk87Op/BiPwrH7Ze0HEcQiEMiRxRg5iEzXa21yTsN7DnbpSrhcO8jrHGpZ3IVVG5J2ArqHB/Z5AJBBMO9eJO+xbAnKl1JjgSxBBb32bfKoAsG1tKNGk81tSE5S0OYcKwLTypDGAXc2UEgD5mnFvZbjwLnuR+8zr+LRgfjTrxn2V4WTBumFj7vEI2ZWLMc/hByNmJsCDoRaxA86SeyvtIxmAfuMRmmiQ5WjkNnjsSCFY66fda40sLVHfSqK9LhwYZVH5hj9mfYfEwYp5sRGAqIVTLIrBi9r2KtsFBuD1FdS1AsEsOgsKz+BcbwmPj76Bg33h7roejW1Hrex5E1eZHHutmHRv0YfqDWCrOU5XluPikloQRMbv4ftdR91KGc/d/EV5imHeMpBUmzWPPTKbcjaw26ipWqCTLhYkkFdAzkC418ba/Dpy36WixjlcwUHxAlhcaDW7eXpz+dW8l8y7ENcHpcA3+ZI+dV1OhW3i3djtbr53tpyHwsWIg8zIGZQyAi50NiNjWn2dgT6Sq5Vt3UxtYW97D62rHLOwTIVzANqwJBy2XkQdb3q7wg4sSholhd1R8wJZRldktb9q6UR/wCRdcGRLYbuJ4mSJbxQ95ZWOUErqLWAsp31+VcN7P8AbubF8Qy8RxWKwypMHjghjsAyFrxy5V7yw903Bv4r2tXUMfisdKpH0Y6XUth8WikXt1U67Um8G7B4bDymebAY+eS+YFpFfK175vqihZid73HlXQU0t/wIaZ0/tV/3Of8As2pJX/8AK/tz/wAuGtnjnaZZIJIzh8TEzgKO8iKjxEDU3sKxeWIPWd/wWNf0rk9pNO3XEdSWpnd6aK2P9kmisf8AGqmjPE+cWgP/AGyMb/W2+N2X9K3+xc4PfAfa7qX/ANyML+aGqvHo8mMJ5Oqt8vCf8P41l9meILhSM+bKqyQHKCzExPdLAam6FjWrD/48TKL5vr0RnnrFMw/aq0+I4rhcCqZkkivECSq5yzZ2JGxEaFcwuyhrga2a/wAF7MY7A4vAy94rCUfR8UiXtosrq2ty2t2Lkgk20GYg7/EsS+LMTR8OlLRPnillYQFD1G5KkaFdiNwavHBcRl/pMTDhx0hjzm370m3qK7GfkJylrtZFeJH/AN3Kh+D3iPyEl/hSbPiY2YIHBbVSFNyAd9r8wBatfhHCMFjFlZMVLimRniMjSkhXyjVQLAgZhY6is9lZozZVVzuNgHU2a9hycGsVdNTUmNpvge8Mlru9gflYdTyzW3PwpS7Te0fDw2TD2xDg3JBtGLbeL7Wtj4b7birXE+zjYtb4rFyd3v3MKiNfQ3zFzfTU77Wr1w/sLgU07gM32mdi+W+uUBjlvbnbz5irRyLWWpLzPY5RxrtDisc/1rs+vhiQHKPRBufM3PnUvDux+Pn1jwsljzcCMfAyEXHpXdsHho1UJCixx7XQBbjotuX7Xy6i6WNwi6WFybbDYWHU2PparvFWVoor3XNnIeH+yPGP/SywxDyLOfkAB/xUyYH2Q4VLGaeaU9ECxhj0t4j/AMVPjLYaO1+WxufS1vlb4V7gGcHOAW91hy5Gw6gix8+e1gmWIqPiWVOIrDhXDuFxviIYUbEJ4Y1zl3Lv4FRbkkFibEgDS9b3AeFtBhwkhzTzPnnb7zucz2/ZCgqPJRUuN4Hh5UC92iFdUdFVWjYbMhA0IOvTkbip8BI75DJbMqLmttnYAtbpYf4qTKV1v1wLJWLGGazW+8oPxU2P4FaRfad7PxjQcRhwFxSjUbCYDYHo4GgbnseRDo7WRX+5qfTZvw19QKslqiEnCWaINJqzPytw3iGIwc/eRM0MqEqdLEWOqup3FxqpFd17CdvIseoR7R4kDxJye27R35dV3HmNa8+0DsLDjlaVSIsQo0k5MANpLbi32tx5jSuG4/AYjBTBZFeGVCGU7ejKw3HmK6HwYiPJidYPwP0xjo7gG18vLqOdvPYjzAqIyFRe+ZDqG5gefUefz5mk/wBnvbj6WndzEd+tr6AZhsGFtN7Ai2hIOx0b2uhJAup1IG4PUdR5fKsbg4vKxyd1dHmQ2cHkwy/EXI/X8KixUOYcrja+3ofL/TpXmUALofqzzH2DyI8r/L02+rNoc2hX3v8AMeR3/wDqpQFCLForkO+ViBo3h1O4HLkOZ+NW+IcDmxeCxcWHfI8pw8Oa9vArK8mx1GWVgRzsRzoCrkJkAtq731sNz8hp8K2cF2QQxo5eaGdhmdopCti3itbay3y7cqtR1qXXArPaxx6bhWP4TjppeEx4iXDqcjZoy4axIZXVQCQHBswA0sQbG5a+E+1LiBkjixeBXDd9mEczpKiAqpJORtZAPuqwOu9N8C4xJCIMVHPc5frorZsoJt3sV7kWYeKxBB06++I8QkdDHjuHO6X96EiUAjZhazIRuGBuNxW7OuKE5eRJxDETPgcN9JVUmmaDvFW9lI+tIFydsltzS1AC0C9ZXkb+/I2X8LVa4px0SRjK5kMCSkkoysWa0cWYMPfsWuRoTqLXsLHCsH9dhoRtHl//AFC/4kfjXHx3+SqoLjZdeY6lpqPX0JOlFWKK7uVcjPdi122w/hjlH2Gyn0f/AFAHxpVaUxTF15hMQoHMw2SRR6xkfM10Pi8CvBIrbFW+FhcH4HWucSSExCQC7wnPbqoBDr8VJ06gVxcfHu8Qprj+V0jRD4oW5Db2s4lMIMuESV5ZVPdPHkspys6li4ICnLa9j7y9aRoexnFuI68QxsuHw7DxQIVzNe9wRH4ALW94tz8I2DTwntD3MQgWKSd1NohGL3jbVCx2UAHLf9mqvaTFY4RB5nEIkdY48PAwDuz3sHmIIQAAszAHwg6V0oVMyTjxE25k/B+H8N4MrpEzB5MuZM7SOxF7eAaKdTrYX+FUuId67FxG+GWZiy94AWuqjPpfwFhZgDf3ZDXN+zftZGGxIBwmHWAtleRe8aTKTYtncktprlyi/lXe+IYVcTDZWHiAeNxrY7qw6j8wSOdVrUpTjrvwJjJJ6CIsBSwBzHUqXN/Ed723NtR/FtVmHDCwDHN5bC/Ujn11vVTEYhmGVEBYkgkN4Y2U6+Ib9RbcEGrkMnI+8N/8x5GscXdDy2pqBsWqyWuLsAAL8xfQ9Lg/gaikkzHKL2200JPS/IDS5+HlX2CME7AqLjbQnUaD7oBI8yfKiwGggtdmOvM8gP8AKjDNfM3JiLegAF/jr8LVX7pF1IAA18h6Dl8K9XLat4V6XsfVjy9Pn0FbEk8+NVb28TbBV11OwNtB8aIGcADJruSzAXJ1J0vzqLDi9mtZR7i2tYdbcifwHqashqq0BHBK+UXS+nJgfzAqPD4oL9W11t7ubS46X2uNt+nWpIG8I9K+YhMw00I1B/z6g7GpsB7xSlkZRuQQPlWbxjhWHxsWSeMOvK+jIfIjVWH83qeM2F00to0Z2Hp08uR+N6+2V/FrfY2JU6cjYg6VK0A4t2h7C4nASrNhn7wKcyEaSKF11XZgNjbe+2tbPZr2iB8aRLdI8QIwQdo5lVUJHRGsB5aedO3aPsxhsUv1kQZh9oGz210zbnqAbi4Fcx497M5ku2FcTob2U+F/TXQka3Gh023tthONRWnuJacdjsUsIuSPCTvbn6g6H86oHDFvAW2HvLcEKdl589vIfNZ9n3aZ5Yvo04YYmIAANcM68ib63HM9LHmaZUxJjzCVbDVu8XUN0GvutsADvWapeGg1O6ue4YZ8wVVOJAKyMosrZFbYnY5mAsLXIV6b+HdpoJyUDGKbbuphlYH0J8XoDUGExEOCijfEOFfESIlxdgXk0jRSoPhAFr7btpesvjHabhUpyYt4lUqrRNJcM6sASy6AoLm2pBJDaC2uijTlGPixMpJsWu0HB8VHjWxjwzdy6JG7YRIlkB90Ex5nZxbKuhbTNpyrpXZ/hgw+HSEEm1ySxBJLEsbkADc20A0ApU4bjiuU8Px8WKjYlVgmcEkqMzLE+hJC625DU1fxnaklGhMMsGKYZVVxceLQsrjRgou19NqbKpZfFoVtyMbieI7/ABN91eTP/wCnhtFPmGl19DW72PgzSyynZRkHqdT8gB86WcKyhXlGim0cf9nFcX/ia5+AroHZzB91h0B95hnb1bX8BYfCuXhIutic74a/fr8DpfDD6mnRRRXdMxm9ocSseHkLMFupAudyRsOp8q5nwbH+M+ppu7f8EMiriEuWjFmHVN7jzB18xfpSK6BbMP5/n/SuL2jaU8rXDQ1UdEb3DMScLKLXyxglQPtQOfEo6mJtQN7Adaue0fBYzGCDCYeGN8NNZnxAfxRFbEMNgBqCCCxYZl8N7nNicyopQjvEOaMnYnmp/ZYaH4HlWjwnjkyxrBh0VjIxERkawiIuXRxuShBsOmn2bEwGI/0l0+vcrUhZnLT7H3gjjlxuKjhBkZXjUZnKqSAYiNGZrCwIFgwJ2IrqsccmIaDDS5sJhmUrFAp+sdYlXSQ7ouW3h9QeRrd4R2cWN+/mc4jEHeR/s+Ua7KP502rmft27QS4TGYCTDvkljSZuR0kKqbg7ghSP9a6es9xWi2Oj8T7PKqA4aMKUFjGNM6i5tc/bBJIY73IO9wrY3FAZcl2ka+QbbGzZr+6BsQdQfOmXE9pHEUKLHmxk0asIRsmYAkyfdUdD0+NRDsxKsefve9nJLSZtFcnkungI2B57EWtlyVaV3eG/HrmMjK25hQRC5BJvckr6kncC5W5Pl1F71fU1Qx8wVGJDZlNsuzhjstuRPxBGuor0srqvjAzW3GwPn0F+f5UlSuMLGcElifCvXa43Pw2Hnfyr60oNi2i8lO7eo3/h+fSqkMZNtdABZtx/COZ/aPwGpq5EgG253J1J9TUtASidjsh9WOX/ADPzFeZJXG5UdBYsT6aio5cRbRRma17D9f51qNGt475wRqbaj90dOq76czUWJPeFmewBy3tsQRf0NzepzMw3T+6b/nY/IVURu8VQp0FjmHX9k9ep+Hp6ixX3tr2V+Tf6/geVFiCVmDHMhGYfl0Ybj9PmDE01iW2I99fLr5268xfppJKgO41Gx2I9CNRVeX9rUcnGhHr5ee3UVKQFstVTFKPMMeS7m3kdNOvLrXiBmyBVsxFwGOgsNvU2te2m9R4DEgqS2jghXB1ObkFA1N/sgDWocrAVYIozIO+VRNFdkdraLrco2llsfEPgdKbuC8FEg7ydLoQckbjcEWLuDzINgp90E31NhBF2YaaMmVmhNrxhbZlIIIZzzNwPADYdSbFZsHxyQCTDYomLEKjFZEAPeqAfHECLF9L5SN+W4DqVN3Up/YXKV9itJwqTDFjhMuJhRrvhXIYxm1/q2NyrZWvlPI87184bwfheODFoI5XBN0mRRJDcklBoGCBixGpsWIBtoOe4Vmw57sYlVLYnCs5lkmmaT6SJWfRUMaF7KFewYhczFcygMvZrDti3u0mWQCUxYiIu2UxMqEM0lndWzWySagpJZirKF1ZXHYXe+44cP7F4CF43jwyq0Rdo9WOQyWzZQzEDa9uRuRYk3Xe0XEDiJbRnQ5ooiOS/10v4ZV5Gw+9VniHHMSiyYbEBUcLmfEI2ndG4JA3VzbKBpuSLWF8mI5FMrDKzgBU/3cY91fI8z52HKufjsRaOVdeHXuMpwuyvxjEqgVFsqiyqOgGgHyFdK4A5OHjJ+7b5XA/AVyOWMu2Y7U9+zv6QUdnc9x7sane43IO4UbW9dra17NSjPxtqXrfKONFFFdoynxhfQ7VzPiXZScYloYkJibxK50VQeRPUHS25FjXTaKTVoxq2zFozcdjkScPmwr5XU2v0/LqPOreJA1lW5U2MoXcFfdlS32159QPLXqLKCLEAjzpR7QcHMJM8I8G7oPs/tAdOo5b7bcnE4KdP/LB358x8ail8LNDs7xrvh3chHegZrjaVeTp+o5HyIpU7WcCgficc8YafG5AqxNlaKIC9pJAVJBF8wAI1sedjXdO7tJHcRg5/B70Dc3j6oftJ0vy2YuxMsKAx/wBfIS5kJzd+NTmVjvb7u4131J0YbFd6rX169Sko23PPA+FmGaUHEAThQ7MwBMoa3je+ojBBQKpW1iST4banZ3tNh8Zh2xETrkRnVzfRTHvqbeEizAkC6kGw2Fftp2Si4hEFZ2ilTMYpo9GQsLEbi6nmtxfqKSuy/ZNYEbh8TGVEbvMbMgsZSCckSAtpYb2O9+eh2OyWhTdjPw/Ctj5HxTlo4rZMOBYMQDq7XBuCdlOnloDUWO4dLDcuuZB/WRgkfxJqyeozDqRWD2s7Y4rD4qHD8PgjmaUqbWJAiXIqAZSMiXLEuRYEkfZNM3aXiBxAjwkNx9Ia2f8A8JdXcfsnYE2zC9tLEqqUItXe5aMnfQwMDEWzyEkBmOXKQQAug2upJ3NSYqdkAuQczBQRobt5G4+NOk3Z/DkCyZCAFDISrWUWFyPesOTXFK+N4UxxiYdGEhSMzXcZbalACYxYnX7tZ5UqkfHrriMU0ygEIOzKAbg5Sx131U7Hzv8Alb2jx6+MnXXca6bgAcrb1qycJxC/1Jb+zkRv8ZQ1lcIiZhKypIwMrXsl7EBQQbE6i3LSqXmt0/InMjzeILYm3LQkA38hoaJVJ2zNpYZk2v0vlHzvXvjkDiBmZJFVSrFihAFmU1pQ8NxD6iFgDqC7oo1/dZz+FF5cE/JhmXMysJKxLINMhAOY5iLgHluPMmvPEIGyFlJZkIaxICm24I21HXyq63C3TGRRyFI/pCMMyXfWK5t4gBex3KnlpTTheAQKbkd6w5yHNY+S+4p/dUVdUqknyIc0hcwGFknsYlup+22iD0O7/wAOmnvCrPFODSYYJi4WMskVzIpAAdCLMEA90gajc9S1hVjsyTh55sC3ui80F+aOfEv8Lfqai9pfHZMLg5HgxEMMwVmUSi5dQMp7sX98MyWJBF7AjWn0qEV9SkpMr9qu1jCGM4YECZVKzeE+8SpRBe4kBsPdaxICpIxCVS7PTjHQjC4jOZEUPFOA5ZbBDmLm+t2FjnbNb33Klqlx/D44W7uQH6Fi7FTp/wBnlYb6ggKwJBBBUglSMtwdnBcBEEqiFWWO6Fzn99lGXOwAtmtYG510sPDTk01ZlNhV/wBkTfSDBLingmeSKRSRnimEZfN3akgRyPm8QG5F9zTQiJw+IorvPPM7OO8csWJ6k+5EgsLDQDqTrJ2zeFou5dc8reKNQbMhH2832FHU76ix2pRjVpQS8jOlgskp0M2X7CfdiHM8zfmSRlxGJ7pW4llHMeo/rCZHbMgbOWP9fIPtW5RpayjyHIa0OINLM1o1La8ufkOp8qaeC8IOJOZhlgXQAaZraWXoo6/Ac7N+EwEUXuIF8+fzOtYsPhKlZ97LReP5GucYK3E5VwbAvNOuHAKnd7jVQNyQefLXmRXWsPAqKqKLKoAA8hQIVDF8ozEAFrC5AvYE72FzUldehho0b23Yic8wUUUVoKBRRRQAUUUUAKXGuAtETLhxdd2jHLzTy/Z+XSlowAgtELqTmaK+Xxb54m/q3/A+XPqVYHGuzgkJkiISTc/db1tsfMfG9cnFYBp95R8v119B8KiekhdPamf6OyoQ7aIJm8LRX0JmS2hUa5gLdRprvYPg4iwqxwMHHvk3t3zHmzg+6TqbXuABtcFXxcBD2lDQzAWDjQ2/J18jcb2tXzC46bDHMCEXcsoLQt5vHfNEerLp5mlUMbZ2qb+vXqTKm1sU+wHY2aGSebGSAzS52dlVbBEYKhyyR5VzESEALoqrtsbcnaJoC3EnhMqzsYIfEFZVQEpZLXIdlJa2q2JsRe2hx3tA0+HEOXuu+ZUeUMGjWM+8wf00swG5pwwmHjVIxGBlRQEI1sLW0PpXRjNVHdaoXayOQeyDtHPjOI4iaeQhXVgihrJcMDlyOzEEhiwsSQEYXsLU1S4v6ji2OuwssiRlWKm0CEDKy6rdrajnWr2i4JhI2n4i8MTzLEuQsinK0ZYowuNHLMozb2VelU8bgcPDwRkxecQ90GlykhruwcgEc8xAq7d5IjZCz7DOPY7GfSJMViXkiiyKqlUsWbMWJbLnuoC87eLnTt7PTfBI/wB95X+bsP0rO7CcDw+B4Yz4dpGSaP6TmktfxRKdLAWFhcA3Op1qvwfgk+IwcEYfu4QiMP2mJLk2HLxW16aVEtZgtjU7S8Zw0+ExMccyOwV1sutmRc5BtoCAL1ewfHoEhh7x7EwxSNZWbKrDRnKghFJDatYeFuhtk8C7GjCYXEK7JLNIsuaRUKXzqbmxZvEx1JFuQtZRSZxvg/EDhYcVw9VmWXDxQzwsAT9QzGN1BIuRquhuL3sb3Ut8QcDoHbtSsMeJG+Hljk05rfKw9DcfKlj2h9tIcFjMNImKAZRbEYdVLGWJxmU39wMp1W5B8R1AJBq9hOzfGJDPJxGcrFPHIO5bKzFnvYmw8AXcC99hYCq/Hewf+18FhpI3SHFQBoXLL74QhQHZRmuoAI3949b1KspBuj3w3t1/tQyYiDDNE+AKyKS2bvI3zB1aygKbC9tdA1eMT7K5cfKMXiOKPOjANFeJSQpsQCpbuwOoC2JvpXQexnZ1cBgosJm7zIGzMRbMWZmbTpckDytWJwPiwwvf4dFM0aOTCyMMoV7kqzk2XKd9zqdKrKag77ILXQ28QwKTRNFKMystjy+I6EHXypNwfaOaGFoSyN3TFFxRN1Zfs5QNZJOVhp1J1vXx3FpcVcaSL91SVgH77+9MR0GnkKihhs67zTbLYaL/AGaDRB57+dq51fGpO0NxsYNkfcl7tLmVGN2Vj9ZMeRlP2V6RjyBta1bvBuDNiCHkBWEbDYuOVui+fy61f4R2a1EmIszbiPcD977x8tvWmarYbAym+8reX76/QSqKOkTzGgUBVAAAsANAAOleqKK7BnCiiigAooooAKKKKACiiigAooooAr43AxyrlkUMPPceYO4PpSxjezcsZzQNnX7rGzD0Ox/D4030Vnr4WlW+Za8+JeNSUdjmDwKrnR8PJzyjLf8AeQjK1+trnrX2DvojeP8AvYdu7J82ie8bfM10fFYSOQZZEVx5i/y6Vh4rskm8UjRnofEPx1/GuZPAV6bvTd/R9fcaqkJb6CpxfjTzxiCWRAC6EiVGgdgpuVubob6ai1MGP4tBioHgxGHl7qRcrZbOCPIxMW+NhUE/BMWgtlWVegI/ENb9axp+Gqvv4Vo/NFaP8Y7A1T+TiKXzxfl/RORPZjBx3j+GODmjjexMToqFGTdSoADKKt8B4vhUw0CfSYQVijUjvEuCFAN9d70oqybLPOnkJM3+MNX3L/5mQ/vLEf8A+YqV2kr3sHdMepOOYS1jiYNf/FT/ADpd7E8bgiwUccklmUuLAMxtnYjRQTsayMv/AJlx6JEP+g15Lp9rETt/GF/wKKH2kr3t15AqTHCXtPHa6RTP55Mg+cpX8qVMFxxoXnETxDvZDL3ahp3UsPFYR2Gp+VRxYCN/dwzy/vB5R/xkitjDcGxTCyxrEvmQB8lv+VR/Kr1Pki/sv7Du0t2ZWJlnm/pAxHXEMAvwhi0P8VjUZgQkBy07cktZP4Yl0PxzU14bskN5pWbyXwj4nUn4WrcwXD4ohaNFXqRufUnU/GrxwOIqu9R29X19yM8I7aitguz88tjIe5Tpu1vIbL8flTPw3hkUAtGtid2OpPqf02q5RXRoYOlR+Va83uKlUlIKKKK1FAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDE7QbUhcQ3NFFcXtE10CLB7089nuVFFU7O3LV9hkooorumIKKKKACiiigAooooAKKKKACiiigAooooA/9k="></q-img>-->

<!--          {{ alethiometer }}-->
<!--        </div>-->
<!--      </q-carousel-slide>-->
    </q-carousel>

    <div class="row justify-center">
      <q-btn-toggle
              glossy
              v-model="slide"
              :options="[
          { label: 1, value: 'style' },
          // { label: 2, value: 'tv' },
          // { label: 3, value: 'layers' },
        ]"
      ></q-btn-toggle>

          <div id="content" style="width: 100%;">
            Powered by :zap:
          <br />
            your metamask address: {{accounts}}
          </div>

    </div>
  </div>
</template>
<script>



  import { ethers } from 'ethers'
  import { mapMutations, mapGetters } from 'vuex';
export default {
  name: 'PageIndex',
  components: {

  },
  data () {
    return {
      coinGeckoOracle:"",
      status:"online",
      accounts:"",
      slide: 'style',
      coincap: 'CoinCap keeps you up to date on the status of your crypto with real-time market data and tracking features. ',
      coingecko: 'CoinGecko is a cryptocurrency ranking website that gives a 360 degree overview of cryptocurrencies.',
      alethiometer: 'alethiometer measures general market consensus of an observed price. they are calculated using a number of data sources.'
    }
  },
  mounted: async function () {
    //this.showModal("BuyZap")


    //detect metamask
    const newAccounts = await ethereum.request({
      method: 'eth_requestAccounts',
    })
    console.log("metamask accounts: ",newAccounts)
    this.accounts = newAccounts.toString()

      try{
          const chainId = await ethereum.request({
              method: 'eth_chainId',
          })
          console.log("chainId: ",chainId)
          console.log("chainId: ",parseInt(chainId))
          if(parseInt(chainId) === 1){
              console.log("Mainnet: ")
              this.coinGeckoOracle = "0xF02491e199565B9822ECf001eB6a336959D655C8"
          } else {
              console.log("Testnet: ")
              this.coinGeckoOracle = "0x513846a568407ebd16bc29d238c364702963377d"
          }
          console.log("connected: ",ethereum.isConnected())

          ethereum.on('chainChanged', (chainId) => {
              console.log("chainId: ",chainId)
              if(chainId === '0'){
                  console.log("Mainnet: ")
                  this.coinGeckoOracle = "0xF02491e199565B9822ECf001eB6a336959D655C8"
              } else {
                  console.log("Testnet: ")
                  this.coinGeckoOracle = "0x513846a568407ebd16bc29d238c364702963377d"
              }
              // Handle the new chain.
              // Correctly handling chain changes can be complicated.
              // We recommend reloading the page unless you have good reason not to.
              //window.location.reload();
          });

          const permissions = await ethereum.request({
              method: 'wallet_getPermissions',
          })
          console.log("permissions: ",permissions)

          const chainInfo = await ethereum.request({
              method: 'wallet_getPermissions',
          })
          console.log("chainInfo: ",chainInfo)
      }catch(e){
        console.error(e)
      }


  },
  methods: {
    ...mapMutations(['showModal', 'hideModal']),
  },
}
</script>
