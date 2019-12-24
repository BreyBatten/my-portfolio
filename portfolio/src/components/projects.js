import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw2HFMN8YcRTeHbc3itzMbatJ5N1SLZHrlF0dgZGO0QvmHxuPJ) center / cover"
              }}
            >
              React Instagram Clone
            </CardTitle>
            <CardText>
              Simple front-end clone of instagram with sign-in, comment, and
              like functionality
            </CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/BreyBatten/React-Insta-Clone/tree/Brey-Batten/instagram/instagram-app"
                target="_blank"
              >
                GitHub
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw2HFMN8YcRTeHbc3itzMbatJ5N1SLZHrlF0dgZGO0QvmHxuPJ) center / cover"
              }}
            >
              LiftBook
            </CardTitle>
            <CardText>
              An app to log your workouts with reps completed, weight lifted,
              target muscle group, etc. I built the login/signup modals for this
              project.
            </CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/liftbook/liftbook-fe"
                target="_blank"
              >
                GitHub
              </Button>
              <Button
                colored
                href="http://lifebook-fe.herokuapp.com/"
                target="_blank"
              >
                Live Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "white",
                height: "176px",
                background:
                  "url(data:image/png;base64,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) center / cover"
              }}
            >
              E-Commerce Backend
            </CardTitle>
            <CardText>
              A fully functioning backend with user authentication, products,
              and categories. Built in NodeJS and Express on a Mongo database.
            </CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/BreyBatten/e-commerce-be"
                target="_blank"
              >
                GitHub
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "white",
                height: "176px",
                background:
                  "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWAAAACPCAMAAADz2vGdAAABd1BMVEUQEBD///8AAACEzCoRERH8/PwNDQ0QEA4QEBK42mJUVFQAAAhjY2P5+fmIiIgJCQmSkpIAAAzr6+tubm7y8vJ2dna/v7+J0jFkjjv///qpzE4NEBJQbjh9sTkQEQzd3d2YwjhKSkrn5+dYdzpynjepqan///S2trY7OzsXFxenp6f8/+hoaGjFxcVAQEC42l4rKysiIiKpzUlbW1spKSm62Gb5/+QQDxecnJwRDRlEYSnS0tLc56+iv1TT45642GwMABe803IADgCM0DxXfCwQIAiDvj+Wvz2owmLg6r3h77e/1oDp8stAPkXW75LE4Hre86nG4Y3B1Y3b4LrO26by/87f9p+LiZILHwBIVjxcb0w1SSUwSxknPRVAYyBvjVWrw2x4qUcdKRdKXjhhdkobLw9mlD+SzERARjSCu0ElJCwIFwVBXCtoi0K7y4txnzbXz93E0ZUeNQAxQiQ0Vh+dtk7J2bOInxi2zXyVxSqUtUfe586MpTcGHCF4AAAXjklEQVR4nO1dC0PbVrKWBulIINvyQxgcioydWDYYGxwHPzCGGEN4uduGkja7DVmyW2BZ0uRm2+6l2fvj78yRDX7xKBFOLlcfJLFlWUf6NOc7M3PmKILgwoULFy5cuHDhwoULFy5cuHDhwoULFy5cuHDhwoULFy5cuHDhwoULFy7+34ExnQMA2Oc+l3sEVTBVBTimnzyZn59PZbNZtah+7vO6R1B0NRoPBuNBw+KIRMQSKJ/7rO4NFEGFkrW1tb29vbTcxJaV0j/3ed0bKEzNWVu1lZWFhWH8RczN7RQqwKTPfWb3BpBI7xCv9u8c0rywHBm9pwPd4O1GZSl5awGpJfPlFowsLzSMaUbycb8gSZ/BQVLQgGtz3HKH51aQY/5ix5oBSTDvGcMS+GcBBtwofG0trdjawG13hZRibmHJioFqDvhc7hiSAKIY9YAuCYMTCgbhQg1tdmGFFGIFqV1AuhfmajTODewsBgSGBIve5DxRPLAmRyJLC3NI8J/+VPtm+NvnC8svnq8MI9vLlg/uW7TBCZZF2T9AKYZMYYdkd+Gbnd3Gzk5tufFd4zkSPrewZcwXB3UWAwInGBkWDR8MxtE3YcRaXuDqu7DybeH7leUXu3uNHdIIdIaTIAxQrAYAm2BUCa+YGcSFKaoCFVTgOe6dLdS+ry1b3+292MEBj5yKZSsP95RgWRZjAzBhU0UDXiLXbJh8M6I0YhWe1xbsmKPWiN8zEW4RTBgZgLtmClBp1ObQcSCC55BfWS48X/n+G/IoSIXxLO6VJzFoghX0Cxsrc3b0NryybIkijnjD36xwp9gWYZfgT4EKP1jPeRoCOUX7jRC/PF6muHnZmh901HPHGLwFqxAtrJDLMDy8ZFliYXehGdHhtp30zD3j97MQjKMchcbDy2lZRP1t6QUqxraRu1f6IHwWglVIpnfIJ9uORNI7LfMl1Xhu+e+bAX8GggVVV+PoSAwv7DQaz4cv7Hd44UWwqN+zZNrgBzlBkUApicvEaI1HzG0G7AP1yydYFUxFvbG37hTBikINC1wDuk8Iz0axP6QgTYf8KGUj2rSBD3lzC404mF1nrihK6yCC8qVwr5iKcuO0tWMWrCqmUCzS3Ht7001aVCQOCWaCjvSG5gFS3u2FuQuGKeqYozmjrmOqSut+4YHMLyVVrBb/wLk4RrAiER9kgR33dgK3mab9AVlvbDQFOlPAb+0Od2Cu1oh250zp5pCxmGgyilq848IJSZDYTTJN5gQSPHHTY96EYOkGDasqY6hMDLnooIFoUdGu0RKZAKnRmJ2zYxBtrLSxi1gWQ13t69AF8w7TQIxRC5J0fROqFnhavIFeMTr/GxFM+13bMFMZrEIAb0XHzcVWdG1idUI1GcyPjrRSoqb2tbVca8POTqPS2Txj0z/84PP7/TMzMwlEMpGYv7tsFNI7E6zMYu+6bs8ALI4vQuAGR8yVSthdryOYgVSqlK5NxzNVO12bPFl7GSh26P/qn//y45/h76tFM+cJ6edHMVWYiRQI6SasSHfz4I9Y5zvQrlb4btwciWxoNE4URFOXTFDScIDjiFmEV5P1sfqjfWAKE7DDdmti85ASgF8WRa8PriRYwpZ9XvwoHsLu08Mxdn0UWBJZoQyvn40hTvDmmsgxDWs0ME2s/vTyr+t/XZ0wU7m2XLoi6Lkk2WUC7bNUKqGhdo9wbNrYPqhWN6vn2LVmAY98B84EZCuiTNcpy+FU/4kHvBpkM7B+dDw0NDY0dDy+/rTMkAC1rxrrdMO8stcrRn1XEazDbFSkhr1iJdV7axX0Gwjlp7D/pj52sraGJL/ZJ6EoqybJlFnU//K3v//0k4mEd94fW/Pa0UmcCQlr58HjB/TbxCb6cbqqOD3UoVRmkF6vLPJ5h2Df2TO0I0ENwNoxkssx9mwNtCJuNyd6TohBrEL04g/eNu+lBDNIhUWZ31mv1xDDPQ0jhROCMsFg/RF2m6ND0NaP6nRzA3hvafhXlaL5j+l//PkXU+1xj7EbtUDFVIogtTFMFm5sV5vMPuYkP36wY5UA79QtiewPCXIzFxRwGCjFUlc5jqKWA/D2ZKjFL6J+8koLlHvmELHXSyWxLzoIJhXp3g/vbUez5NwWi4FVvK/196/IunTYnxwbq6+dath7GN6BoqKrTEe9+GMdW2FowGc2u8jv4ybNS1YWio6mg1B8g2hEXRcaHenWCabBq/fH7fzi6+NH+1q5+8rwiIbYfcA+BKP4GnLnrZXlaKhjDFAFhvf1NanDIpSLqBiC+lRbPBmrTy6CjoOCwocAVGNV+WNxmKT8M7JMzHJuqy073kRXw0ENRhdnJIqX1UuHnJy+6K6KpKrwcvx4rJ1em+PjtXUgD791Tgxs8b2WYAy4UHy9nfuhpIjhWNu9Ncli31MzpwEa00zSKqatohTXUYpZkUcXqBVcwv7QpUMivcm5re0uLW1tLS3XOMu7GO05JRHYl+fD/fsykm74pu0LJRPhl9TNblOKX2NnLTaFmEE2c8kROwmGVNLb18xxm3/6fLdime5r/dEhFHkGRLFdCqYdkiaPvywXb1vlYM6jAaPRLmylmy1bjR18X20EHasuYHqqfQTqANlgs8xIMYtFHML70juEftPxm0OtRTD4euWmH8HgoeGvb9u4NX5eKa2uvhmqT76CMkbCpARFtVhG1TcZeotvxsYmT9ltrQ2ShU3yH2pWpAkrsk0mXHNuzkO6ig7SjTxvCf1fGO9Vh5YO48+aptrpNRgRL7tjXQTHZbmfMvF2ZTnT2k97e1x/DRpl70hmacTTNC0wgSGzBq+H6l/BLWNbyIp7D2w+I82WI5ElPuItiVmnKifA13NxHe89NsGqAo8u4df2Jn6Gpu8I/ivY7SC4q+EuLT6PabWv6s8Au0eRra6vs7IaON1ffL34I+q+MlHWJusPtVtZsETVgZuc4Oq7rQJfxJF+8eGAu2tVygl9Orn8MrsIFsW+BBcVeH8VwUPjRDANMrcluLvhNoLHngGbUNTA25M3p2UcCeqovfVnRxgwq7cnmKoDl+34YmX73e7Z2e7u2buzpW9tp/jM8jlUOdFGMNluMueJdmhGk2BB1a60YCSYCTzd3UYwHUdOzMgdmtGHYFmMiF5/rsK1IdLcdE4wfDU2CQI6w4HF+rNT7Whs6Nnkm0lyIU6LCie4x3foid/6IlPYfNyUCCvdTFlYe023uBGcdpxgr5wZoYZDwR4LRo24WiLGxjUmTCg9BIdzANlwu8vWSzCOdN7k19iw57/kltPmldsteBIohiCCVw+Ph8ZfagCna/WxtUBRmxzrQ7CSHw2FQrMthPphNtQi8/GDs61CmhSi0PhQtd3hasGpnM8FwbLoo4whjnus4hDBmTwlPwHy8assGEML3G/x530IYNjRuhWlfgSfrL6t1/8F5bKqo2S9gUsIZj1J3j4wo41mlLzzYu/d2dk7+rPdlIg9K3XbsfNSgkXDTkShaxxyhmBxHuz8fd9sWtu2MBw+Oq7Xx08hKEa85Lp5L9JenQTv14ce7a8iP9oviz/qSn+CrwcGfeCxPtgWXCtYPFWZTkesZR41V9NJp/y0NoKD55c+6hDBrdxY34R727YMrNXxGPW3YESQYNkotQXLnQQDur7145NHPy+ug1a+xIKvB46LRUhaNUqkPa6eLTVII9KNpd1NnlnbjuScijS+EIIf1ukgSDD5EmH63vkQ06HBp09Xfz6uj1F0c/zo8DINvgHQrWY5o3EhEQcHB2e7HxrfkmzUrJJTBjwYgoUrCcahEAnGMAYtGMfXrlxPF8GBAJzufzX+fhK/MLmq3ppgxb7OXfIjaoUImi9NeFhpkogHW4bu2LzRIAiWrrPgJBy+oVzvOiTjvq5sZZcX8ffXvwQCAQ20w/Gx+qvArQkmMKjY41xtuYHsplEizuj9juV3bs34nRJMSTFeBZK62oIrOGgtHv0KxSK+6F6J1EEwHKHvQJNUT5/u1+tvP41gSf8aQ2N00x4/qFY3DzY3q1WeuNzC4d6x8oi7JNgrJ9CPmAYpKV7lB9OeJXRtA5TQ7c3cdFrwGg2FoGmwelSvH95eIghMgJK185h7Eo8ft+Y00IB/ALuCxQncKcFeMeijic/2PENfgmUxOgp4VWaf2dNODX55MlY/eX909OjZUH08UP40C0btiqNItCi2+a1uxQFv8/T0LY/aBccIxlCZT312RHIYNsTjnQmkC4LbNuIO3nAMTKmo9PRNm2ChGSo/XX9fp4nlofqzNSjrgARfXz1wCRTBBE9ktznp+bgZJD+3RoEqWByaNGojON4aXZDgc5NrEiwgwVfxO/YzcqBQ5vvmyZ7OxB2aeWIaWG/tSeCr+glolOwhgosB2H+9Nj6+trge0E0NTihRevvLlyCZPjufUaZpo4NG1NEFMh0Et7Z5LrIzTYJNk7Isl9LLCbanYnvTc5cR3DmpRDJCAUYPwdqPx0NHh9hrA4tjz06ZUCwHcCgMBIo4JL4cHzr+8dYSIVBQ/ST4n6VzbG0tNSIe5wnGK8Wfi+iUpvCb9mUTjKNP+dVk/RJ+8XfyUG/KJ6QoWOifxKetWb29ZW/bZ/QpOsHdHihbHa/Xnz3E8Hht6EQvmpKqTkyoxXIxoD98NlZ/tPppE5QwatgIBoPxeDwaTTr7TBT7MnE4SmYvjEeC0WAXwcWytn7pnNzJw1NNaM56MkhVetPnNrxiJnthHvZka9ctEDPdtSdKEV6fjI2dHKH4HkFZocpZQVGewmsMNk5eg35FnXJP3lLoldaeLNCnUtp1eG7BYnSWqpZaDOPo2pLSc4IVtczDgV5+j4/+BjTxqPIrZZLemfBsQxxdhQvzmAbwxbv2oDqVrjDVVNXA6Rqfzj451JnJi6kYr/I5Hj8NlNkVc3J6bGRkJO/xhEKh0dFRn2+0T5JXogIgptoTUgqvFnYQjObk0A3lF35hwbxsL0km1/IiBJoLK8KvXTpB8537UGTSuX9FBwEoBeWOegf+JkFVO23dT5KwEbnD2qkOKNpJsKLQ/Ob62ps3P68HyFfGt4GX4xj5vT8k873gQ2I4SiqtBnBMOB8PWlOaoq/XPpnSNA2B1x87vYiZzqEk9Mt96jCCfT3fdkaKqQawu3KKbZ7RJ10EMHsqlnTIJrt8BDEj9V4cWvt0pl2x8VWyb/1oESMRDfYXqTaC1wDWJ3/F0KTraPnRWeW8jzNdt7YOqm34bcn654BXKTM9W0JZ7CvrKBR5X3u1I8YBZbSl8XOd4MUgRUXo6VcYI0E22t73K31XB0sSUuxp37Hi6T/biG0z+Om4fvJWg1eTY0MnD1fLPQVFeLAnodEY8EMoCpTSm1MbG1NN4KtqwbE8702B50RN9u0XRFP7e6r7UEwdfnmEFNepaupfmq1d/daO8PIpL3Z5lAdK4Vx2Aqj3viCNs7QfDQV9TwZ9B9Vcp/q0yfdUb7JOLfcuYqDLyYZogYYgTOSMpXN2mxx/EJ11wpwFUTlRFMwALKIUUyVeoGg2l+z0GRmoqlrmxCXgKteHKE7Q6Gb49UsXadM9VHBoe09Tym/2NWxY6D8eMZSdfCiPQygZcCd+/4hhhEOzmXcAhYqdFXWCmdrpw6OH8FTl1SDCZTV3zK6iQseLXfU4JIkWcTxJEr1X7ce7iqb9+ObRr9gy3mil/0IyBcc5gFRodMRY3tjY6LLhAydTkXcIHEq0mxgCwMglxdxdoGnKG+yn0I7XJx/I2CGcrnJ+6ff3qY3qBr3dWPL+03S8vNp53LRQVJKYo0+aUpSbtYwj3LyFCswJ5kZ8Vvh3obYx9Xu1kIH/AwQL7fWqV0BijvqVit3w9aDF4IUqt96p6vMVJPlDYSv9roovqDj1hgvQPic+z6rTmxOsZ61lYndj52wv0jjY2bW+++8tawe3fNyKX7+MysXVQAMOFz6SAdcaliXSZOaHwl76AxeLzYJzc8afgJ6e3XHX/2CxvnO4kQargpa19kh9N34rRAp7WxHr4KywVajRlqkNKtsZwKleAww0OzvSH+xX3V8fJFQBwo0qD92WrMJvUxtb1ndn1Y3Nj7RpY+pjITpAgpvuUU+abnq+MycAufYQqJnZu4LD+dTnI9jUYuI7onLqzJK3kNbdiLg39Tv3KJDi37oX1N4lwJcJ53QJZjK0Spqdpx5o2sjOntoZVEiKCVqGaX8OI5lMOJPw8PXFrHsVN27Qc6LYN2nD+J9WXNdxD5hjT7ZUtFRkj+tt9YNV2NzYaFhLB2cfz2y3bWp3kBIBCaq9YxAV+ZNsdJtORgRTMSBjtp+FdwAJPk9Xt6ZFo3SmxHB7JEw7EcFP7CXvfJskNRWDEc6P00Y0Y/OJSu9C2luBqTCTPuBO2seCnN5qWN6zmvUf9IM3uCd8R8uR+wKJ84qzABUiGNWCSwXGrBAigrkOEE8Sg2n6kNlKgp/KI56ELMebX2J8P/oLX2GkahOs89e2oNB2/kJqzRvQsaDZhoAH8WCLzly5opoQ3+L2upnmawOsvX830I/gurwb+XqA/xUBEmx447YFQ75iGJU8BvIVI5iQ8XJTGcNI8qVckDBmIBbFz4kDtGAZaUE7noUYfikBs/FoDvLB6BMoBY2oB4hgSIUNgwoeMkF/2Ajii2AwVDGi8wmDHsPKEkGjEoNYsDIbNDLgM0Q56IwDpQhUnLrLNbe2+S7S+G1nN733P98V0A/+fTOdhAE+Ypy6flhMcoLzvIrBG8M3Bq0QhFxQrGTEDEkj4E6CISbDfACmCmIQ9GlD9OUMsVJB+aDJjxLumxCDSa+RmhbFXC4uBqOi6MPj0YHFGIiiUZFFIxgX5RxkxHgYjXZElGmjjwiOO+ah0hIXbq8bGw/ONvGfD4WGdfYRXyxZuUE+dQoJDiNPMZKIDC3FrojJEdGbQrIM/IMbDHm+SXCKpuj4QGQTzCAu+mbEGQDZi19OIJGhJ/gSSfYjl9N+MUhLkeO4PYPWK5aAViIncesTr5iP0acZMRRDtcF/k5CnDU5dl6TnvNutXA/a7VTtxYdGDV8fpEugDtDBIYKxqweJ4KCIvXhGzPjEKKBhGdBcA5rVJU4wkk8Pf5BsDUZVTcliqLncAGaRHvzN22+TyCWjr+B2Awn2EZcZICv249GxL4Sa46Q/RtIbxrPwiM4tsKQrG42cTXEd/p3/8xF/kO6tIJjqAB8ezAmmOggkmOtwUsyMotFxLwJf+3w+f8uCcSP25RjaMBKMhko3AEkP4z6+nBD0ltCI8b7QW48kilKCyibx5tkHjqKpU90JESwZ4mxIDNKesTaCjT51J7cGFad+bGWDm5b8+9Sm5QNzkM9N4wTr8wYRjPI5O4qyip225ImjBvtwQ9bDHyPEJcKXihl8GpQITiTjpK9+Me7JzobozhhI37Qhz2RjPoaDXA7N3JeP4vFR0z0lGfWljeDReVH2Z0d8cE5wXpRHHXyur6SlrL2NJrX8X/p7O0gPgxhgoI+soldIVRB+kHh3D3PLFKP2dfPZdl7DJSZi9sfs3A+Oj6JO8JXf5IJQ8RW6dwaVN5AXMY83j6YxnyDBQXvWnpbmlpBgVP0Q+GguOU42r3OCqbw94agJz/BJzxbsCY3uh8rcMZienY3pTGd5T4qe5+b3U9E0ePyzuVkP0oUbZnOM5hLDePEhvz9Pz+kQ9HnP7Gw+RiOernv8fs80hg6eWVQPCVI+/2gMpFncBiM+fwg9XNTgvN+DHrDHk9NTnhFqbl7HPUuhLGBDgh7D70LO5485mMFQFIhvf+yYMPrYiIOzGerrINEUDAXIPJ5gcJGZ0JuxgP1BNktOgP2OSa0PGF+lxQMFqrXle9of0Vb8kP8nhE0nG/gsNRN0+1OJNQ8ukfCet+bgxSPBs+K73zYJBwdntFh2LzLrZAvOgSQkfuun7rbi8EFDUVHYIvSsAtQiy6K/M1/ojKceS/pzt+YIfIn8ZyAYhzI9F0Ipy+dHYrFczqQe84U+eFWyO/MnfNvR07kpmNT8Tz01DXSdVwmyL5NgFy5cuHDhwoULFy5cuHDhwoULFy5cuHDhwoULFy5cuHDhwoULFy5cuHDhwoWL+4P/BV2AOnID1T3MAAAAAElFTkSuQmCC) center / cover"
              }}
            >
              30 Before 30 App
            </CardTitle>
            <CardText>
              Built complete back-end from scratch. Built with NodeJS, Express,
              SQL. Production DB is PostgreSQL, development DB is SQLite3. JWT
              used for authentication, bcyrpt for security.
            </CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/lambda-school-30before30/back-end"
                target="_blank"
              >
                GitHub
              </Button>
              <Button
                colored
                href="https://thirty-before-thirty.herokuapp.com/"
                target="_blank"
              >
                Live Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "white",
              height: "176px",
              background:
                "url(https://images.pexels.com/photos/1683989/pexels-photo-1683989.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) center / cover"
            }}
          >
            Wedding Bells
          </CardTitle>
          <CardText>
            A Full-Stack app that allows couple to keep track of their important
            wedding information. Built with React, React Hooks, Redux on the
            front-end. The backend is NodeJS and Express on a PostgresQL
            database.
          </CardText>
          <CardActions border>
            <Button
              colored
              href="https://github.com/Lambda-School-Labs/wedding-bells-be"
              target="_blank"
            >
              GitHub Backend
            </Button>
            <Button
              colored
              href="https://github.com/Lambda-School-Labs/wedding-bells-fe"
              target="_blank"
            >
              GitHub Frontend
            </Button>
            <Button colored href="https://h3rra.com" target="_blank">
              Live Site
            </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}></CardMenu>
        </Card>
      );
    }
  }

  render() {
    return (
      <div>
        <div className="category-tabs">
          <Tabs
            activeTab={this.state.activeTab}
            onChange={tabId => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab>Front-End</Tab>
            <Tab>Back-End</Tab>
            <Tab>Full-Stack</Tab>
          </Tabs>

          <section>
            <Grid>
              <Cell col={12}>
                <div className="content">{this.toggleCategories()}</div>
              </Cell>
            </Grid>
          </section>
        </div>
      </div>
    );
  }
}

export default Projects;
