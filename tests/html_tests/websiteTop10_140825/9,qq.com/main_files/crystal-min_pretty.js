  ((function () 
  {
    if(typeof crystal2 != 'undefined')
    {
      return;
    }
    (function (E, y, j, F) 
    {
      if(typeof window[E] == "undefined")
      {
        window[E] = window.crystal2 = window.AD2 = j;
        //eval(j.output(E));

        // eval replacement : start
        var format=crystal.format;var serializeDictionary=crystal.serializeDictionary;var map=crystal.map;var serializeAttrs=crystal.serializeAttrs;
         var instance=crystal.instance;var buffer=crystal.buffer;var each=crystal.each;var deserializeString=crystal.deserializeString;var filter=crystal.filter;
          var serializeStyles=crystal.serializeStyles;var mix=crystal.mix;var slice=crystal.slice;var lenFor=crystal.lenFor;var doNothing=crystal.doNothing;var generateId=crystal.generateId;
           var Class=crystal.Class;var output=crystal.output;var serializeQuery=crystal.serializeQuery;var indexOf=crystal.indexOf;var unique=crystal.unique;
        // eval replacement : end
        j.crystal_args = y;
        var t = j.__images = [], w = (function (f, o) 
        {
          var n = new Image(1, 1);
          if(! o)
          {
            var i = "?";
            if(f.indexOf("?") != - 1)
              i = "&";
            f = f + i + Math.random();
          }
          n.src = f;
          t.push(n);
          return this;
        }), 
        v = (function () 
        {
          for(var f in F)
            if(F[f] != 0)
              return f + F[f];
        })(), 
        s = j.importScript = (function (f, o, n) 
        {
          var i = document.createElement("script");
          i.src = f;
          if(n)
            i.charset = n;
          if(o)
            if(F.ie)
              i.onreadystatechange = (function () 
              {
                var B = this.readyState;
                if("loaded" === B || "complete" === B)
                  o();
              });
            else
              i.onload = o;
          document.getElementsByTagName("head")[0].appendChild(i);
        });
        try
{          var H = location.search, K = location.href.match(/([\w\.]+)\.qq\.com/), 
          P = (K && K[1]).toLowerCase();
          if(H.indexOf("pgv_ref=aio") >= 0)
            P = "aio";}
        catch(U)
{          }

        var X = {
          append : doNothing,
          flush : doNothing,
          touch : w
        };
        j.contains = document.documentElement.contains ? (function (f, o) 
        {
          return f !== o && (f.contains ? f.contains(o) : true);
        }) : document.documentElement.compareDocumentPosition ? (function (f, o) 
        {
          return ! ! (f.compareDocumentPosition(o) & 16);
        }) : (function () 
        {
          return false;
        });
        var Q = (function () 
        {
          if(Math.random() > y.mo_page_ratio)
            return X;
          var f = (function (n) 
          {
            n = n + "";
            return n.substring(n.length - 6);
          }), 
          o = {
            ua : v,
            domain : P,
            QosS : f((function () 
            {
              if(typeof QosS == "undefined")
                return 0;
              if(QosS.G)
                return QosS.G.startTime || Qoss.G.sT || 0;
              if(QosS.Global)
                return QosS.Global.startTime || 0;
              return 0;
            })())
          };
          return mix(instance(X), {
            append : (function (n) 
            {
              o[n] = f((new Date).getTime());
            }),
            flush : (function () 
            {
              w(y.mo_page_url + "?" + serializeQuery(o));
              this.flush = (function () 
              {
                
              });
            })
          });
        })();
        j.sns_pingurl = (function (f, o) 
        {
          var n = 0, i = mix({
            
          }, f);
          switch(o){
            case "follow_success":
              n = 80001;
              break;

            case "sns_plus_success":
              n = 85001;
              break;

            case "share_success":
              n = 80002;
              break;

            case "banner_click":
              n = 80005;
              break;

            case "relation_click":
              n = 80007;
              break;

            case "relation_click_weibo":
              n = 70007;
              break;

            case "banner_close":
              n = 85004;
              break;

            case "act_join_success":
              n = 80006;
              break;

            case "weibo_join_success":
              n = 80009;
              break;

            case "follow_click":
              n = 80008;

            
          }
          i.actid = n;
          i.subactid = 0;
          i.aver = ! i.aver ? "" : i.aver;
          i.token = ! i.token ? "" : "&snstoken=" + i.token;
          i.uin = ! i.uin ? "" : "&snsuin=" + i.uin;
          return format("http://m.l.qq.com?t=s&mid={oid}&actid={actid}&subactid={subactid}&aver={aver}&oid={oid}&locid={loc}{token}{uin}", 
          i);
        });
        var ba = null;
        j.pageinfo = {
          info : null
        };
        var fa = (function (f, o) 
        {
          for(var n = f.length, i = "", B = 0, x = 0;x < n;x ++)
          {
            var A = encodeURIComponent(f.substr(x, 1));
            B += A.length;
            if(B < o)
              i += A;
          }
          return i;
        }), 
        xa = (function (f, o) 
        {
          var n = encodeURIComponent(f);
          if(n.length > o)
            for(var i = false;! i;)
            {
              n = n.substr(0, o);
              try
{                decodeURIComponent(n);
                i = true;}
              catch(B)
{                o --;}

            }
          return n;
        }), 
        ya = (function (f) 
        {
          if(! f)
            return false;
          return f.indexOf("/f/discuz") > - 1 || f.indexOf("search.php?") > - 1;
        }), 
        V = (function (f) 
        {
          var o = null;
          if(j.pageinfo.info != null)
            o = j.pageinfo.info;
          else
          {
            var n = "";
            var i = o = "", B = "";
            each(document.getElementsByTagName("meta"), (function (r) 
            {
              if(r.getAttribute("name") == "keywords")
                n = r.getAttribute("content") || "";
            }));
            try
{              o = document.getElementsByTagName("title")[0].innerHTML;
              i = document.referrer;
              var x = i.match(RegExp("(?:yahoo.+?[?|&]p=|openfind.+?query=|google.+?q=|lycos.+?query=|onseek.+?keyword=|search.tom.+?word=|search.qq.com.+?word=|zhongsou.com.+?word=|search.msn.com.+?q=|yisou.com.+?p=|sina.+?word=|sina.+?query=|sina.+?_searchkey=|sohu.+?word=|sohu.+?key_word=|sohu.+?query=|163.+?q=|baidu.+?wd=|baidu.+?kw=|baidu.+?word=|3721.com.+?p=|Alltheweb.+?q=|soso.+?w=|115.+?q=|youdao.+?q=|sogou.+?query=|bing.+?q=|114.+?kw=|/f/discuz.+q=|/.+/search.php.+?kw=)([^&]*)"));
              if(x)
              {
                var A = x[0];
                if(x[1].indexOf("%25") === 0)
                  x[1] = decodeURIComponent(x[1]);
                if(ya(A))
                  i = "discuz%7C" + x[1];
                else
                  try
{                    i = x[0].substr(0, x[0].indexOf(".")) + "%7C" + x[1];}
                  catch(l)
{                    i = x[0].substr(0, x[0].indexOf(".")) + "%7C" + x[1];}

              }
              else
                i = "";}
            catch(p)
{              }

            n = fa(n, 360);
            o = fa(o, 180);
            i = i.substr(0, 90);
            B = fa(B, 90);
            o = {
              k : n,
              t : o,
              r : i,
              s : B
            };
            j.pageinfo.info = o;
          }
          return f == 1 ? "&k=" + o.k + "&t=" + o.t + "&r=" + o.r + "&s=" + o.s : o;
        });
        window[E].ActionPing = {
          actionCodeDictionary : {
            RICH_COUPLET_MOUSEOVER : 40006,
            RICH_COUPLET_MOUSEOUT : 40005,
            RICH_COUPLET_CLOSE : 40001,
            RICH_COUPLET_SWITCH : 40009,
            RICH_COUPLET_SHOW : 40008,
            EXTEND_TURNER_EXTEND : 60003,
            EXTEND_TURNER_REDUCE : 60004
          },
          urlTemplate : "http://m.l.qq.com?t=s&mid={mid}&actid={actid}&subactid={subactid}&aver={aver}&oid={oid}&locid={loc}",
          _requestByImg : (function (f, o) 
          {
            var n = new Image(1, 1);
            if(! o)
            {
              var i = "?";
              if(f.indexOf("?") != - 1)
                i = "&";
              f = f + i + Math.random();
            }
            n.src = f;
            t.push(n);
            return this;
          }),
          send : (function (f) 
          {
            f.actid = this.actionCodeDictionary[f.actionCode] || f.actionId;
            f.mid = f.mid || f.oid;
            f.subactid = f.subactid || 0;
            this._requestByImg(format(this.urlTemplate, f));
          })
        };
        var na = window[E].DataStorage = (function () 
        {
          function f(i) 
          {
            if(i)
              return (new Date((new Date).getTime() + 60000 * i)).toUTCString();
          }
          var o = {
            
          }, n;
          o.localstorage = (function () 
          {
            try
{              localStorage.setItem("DataStorage", "DataStorage");
              localStorage.removeItem("DataStorage");
              return true;}
            catch(i)
{              return false;}

          });
          o.userdata = (function () 
          {
            try
{              n = document.createElement("input");
              n.type = "hidden";
              if(typeof n.addBehavior === "undefined")
                return false;
              n.addBehavior("#default#userData");
              document.body.insertBefore(n, document.body.firstChild);
              n.load("DataStorage");
              n.setAttribute("DataStorage", "DataStorage");
              n.save("DataStorage");
              n.load("DataStorage");
              n.expires = (new Date(315532799000)).toUTCString();
              return true;}
            catch(i)
{              return false;}

          });
          return o.localstorage() ? {
            setItem : (function (i, B) 
            {
              localStorage.setItem(i, B);
            }),
            getItem : (function (i) 
            {
              return localStorage.getItem(i);
            }),
            removeItem : (function (i) 
            {
              localStorage.removeItem(i);
            })
          } : o.userdata() && F.ie < 9 ? {
            defExps : 525600,
            valueKeyStr : "savedValue",
            setItem : (function (i, B, x) 
            {
              try
{                n.load(i);
                n.setAttribute(this.valueKeyStr, B);
                x = x ? x : this.defExps;
                n.expires = f(x);
                n.save(i);}
              catch(A)
{                }

            }),
            getItem : (function (i) 
            {
              try
{                n.load(i);
                return n.getAttribute(this.valueKeyStr);}
              catch(B)
{                return null;}

            }),
            removeItem : (function (i) 
            {
              this.setItem(i, false, - this.defExps);
            })
          } : {
            deserializeString : (function (i, B, x, A) 
            {
              var l = A ? decodeURIComponent : (function (p) 
              {
                return p;
              });
              return (function (p) 
              {
                var r = {
                  
                };
                if(x)
                  p = p.replace(RegExp(B + "$"), "");
                p = p.split(B);
                for(var u = 0;u < p.length;u ++)
                {
                  var I = p[u].split(i);
                  r[l(I[0])] = l(I[1]);
                }
                return r;
              });
            }),
            setItem : (function (i, B, x) 
            {
              i = i + "=" + B;
              if(x)
                i += "; expires=" + f(x);
              i += "; path=/";
              document.cookie = i;
            }),
            getItem : (function (i) 
            {
              if(i)
                return this.deserializeString("=", "; ", false, false)(document.cookie)[i];
            }),
            removeItem : (function (i) 
            {
              this.setItem(i, "", - 1);
            })
          };
        })(), 
        oa = (function () 
        {
          var f = "http://{host}/p?oid={oid}&cid={cid}&loc={loc}&aver={aver}&soid={soid}&pri={pri}&tango={tango}&dtype={dtype}&targetid={targetid}&btoid={btoid}&pctr={pctr}&btpri={btpri}&extstr={extstr}&chl={chl}&rurl=" + xa(document.referrer, 100), 
          o = {
            
          }, 
          n = (function (A, l) 
          {
            var p = {
              
            };
            if(l < 0)
              l = A.oid.length + l;
            each(A, (function (r, u) 
            {
              p[u] = u === "host" ? r : r.splice(0, l);
            }));
            return p;
          }), 
          i = (function (A) 
          {
            if(A.oid.length)
            {
              A = A;
              if(A.oid.length)
              {
                if(A.pri.toString().replace(/\,/g, "").length === A.pri.length)
                  A.pri = [];
                if(A.tango.toString().indexOf("1") < 0)
                  A.tango = [];
                for(var l = ["pctr", "targetid", "btoid", "dtype", "btpri", "extstr", "chl", ], 
                p = 0, 
                r = l.length;p < r;p ++)
                  /[1-9]/.test(A[l[p]].toString()) || (A[l[p]] = []);
              }
              A = A;
              w(format(f, A) + V(1), 1);
            }
          }), 
          B = (function () 
          {
            each(o, (function (A) 
            {
              i(A);
            }));
            o = {
              
            };
          }), 
          x = buffer(B, 2000);
          o = {
            
          };
          return mix(instance(X), {
            append : (function (A) 
            {
              var l = A.ping || "p.l.qq.com";
              o[l] || (o[l] = {
                host : l,
                oid : [],
                cid : [],
                loc : [],
                aver : [],
                soid : [],
                pri : [],
                tango : [],
                dtype : [],
                targetid : [],
                btoid : [],
                pctr : [],
                btpri : [],
                extstr : [],
                chl : []
              });
              var p = false;
              if(indexOf(o[l].loc, A.loc) > - 1)
                p = true;
              each(o[l], (function (I, $) 
              {
                if(! p && $ !== "host")
                  I.push(A[$] ? A[$] : 0);
              }));
              l = o[l];
              var r = V(1).length, u = [];
              if(format(f, l).length + r >= 2048)
              {
                u = n(l, - 1);
                i(u);
              }
              else
                x();
            }),
            flush : B
          });
        })(), 
        Y = j.ping = (function () 
        {
          return mix(instance(X), {
            append : (function (f) 
            {
              oa.append(f);
            }),
            flush : (function () 
            {
              oa.flush();
            })
          });
        })(), 
        ga = j.getFlashVersion = (function () 
        {
          try
{            if(typeof window.ActiveXObject != "undefined")
            {
              var f;
              try
{                f = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}
              catch(o)
{                for(var n = 15;n > 5;n --)
                  try
{                    f = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + n);
                    break;}
                  catch(i)
{                    }
}

              if(! f)
                return 0;
              return parseInt(f.GetVariable("$version").split(" ")[1].split(",")[0], 
              10);
            }
            else
              return parseInt(navigator.plugins["Shockwave Flash"].description.split(" ")[2], 
              10);}
          catch(B)
{            return 0;}

        });
        j.getFlashObject = (function (f) 
        {
          try
{            return window.document[f] ? window.document[f] : document.getElementById(f);}
          catch(o)
{            return 0;}

        });
        (function (f, o, n) 
        {
          function i() 
          {
            function a(k) 
            {
              var c, e, g, m = document.cookie.split(";");
              for(c = 0;c < m.length;c ++)
              {
                e = m[c].substr(0, m[c].indexOf("="));
                g = m[c].substr(m[c].indexOf("=") + 1);
                e = e.replace(/^\s+|\s+$/g, "");
                if(e == k)
                  return unescape(g);
              }
            }
            function b(k, c, e) 
            {
              if(k === undefined || k === null || k.length === 0)
                return "";
              for(var g = 0, m = k.length;g < m;++ g)
                c += (c << 5) + k.charAt(g).charCodeAt();
              c &= 2147483647;
              c = c.toString(16);
              return e + (Array(8 - c.length + 1).join("0") + c).toUpperCase();
            }
            var d = b(a("skey"), 73231, "1"), h = b(a("lskey"), 48995, "2");
            return "A" + d + h;
          }
          mix(j, {
            dom : f,
            evt : o,
            ua : F,
            cookie : n
          });
          o.on(window, "load", (function () 
          {
            setTimeout((function () 
            {
              Q.flush();
              y.mo_ping_script && Math.random() < y.mo_ping_ratio && s(y.mo_ping_script);
            }), 
            1000);
          }));
          Q.append("js_loaded");
          o.ready((function () 
          {
            if(ga() >= 11)
            {
              var a = generateId();
              ba = f.createElement({
                position : "absolute",
                left : "-1000px",
                top : "50px",
                width : "10px",
                "z-index" : - 1,
                cursor : "none"
              }, 
              {
                type : "text",
                id : a,
                value : ""
              }, 
              "input");
              (document.body || document.documentElement).appendChild(ba);
            }
            Q.append("page_loaded");
          }));
          o.on(window, "unload", (function () 
          {
            Y.flush();
          }));
          j.resource = (function (a) 
          {
            return y.file_path + a;
          });
          j.resource_swf = (function (a) 
          {
            return y.ext_path + a;
          });
          var B = j.getExtension = (function (a) 
          {
            try
{              return /\.(\w+)(?:$|\?|\#)/.exec(a)[1].toLowerCase();}
            catch(b)
{              return "jpg";}

          }), 
          x = (function () 
          {
            var a = document.createElement("pre");
            return (function (b) 
            {
              a.innerHTML = "";
              a.appendChild(document.createTextNode(b));
              return a.innerHTML;
            });
          })();
          j.getPlayIndex = (function () 
          {
            return parseInt(n.get("ad_play_index")) || Math.floor(Math.random() * 100);
          });
          var A = j.getPlayIndex();
          n.set("ad_play_index", A + 1, {
            expires : 1,
            path : "/"
          });
          var l = (function (a) 
          {
            var b = false, d = false, h = [];
            return (function (k) 
            {
              if(b)
                k();
              else
              {
                h.push(k);
                if(! d)
                {
                  a((function () 
                  {
                    each(h, (function (c) 
                    {
                      c();
                    }));
                    b = true;
                  }));
                  d = true;
                }
              }
            });
          })((function (a) 
          {
            if(y.is_debug)
              y.extension_js_src += "?_=" + (new Date).getTime();
            s(y.extension_js_src, a);
          })), 
          p = j.NONE = 1, 
          r = j.IMMEDIATELY = 2, 
          u = j.LAZY = 3, 
          I = j.SELF_PING = 4, 
          $ = Math.floor(Math.random() * 10) % 3, 
          za = (function () 
          {
            var a = [{
              scale : 7.15,
              size : "960x90"
            }, {
              scale : 2.4,
              size : "409x114"
            }, {
              scale : 0,
              size : "300x250"
            }, ];
            return (function (b, d) 
            {
              var h = format, k = j.resource("default_fodders/{scale}_{index}.swf?v=20130124"), 
              c;
              a : {
                var e = d;
                if(e == 0)
                  e = 1;
                e = b / e;
                for(var g = 0;g < a.length;g ++)
                  if(e >= a[g].scale)
                  {
                    c = a[g].size;
                    break a;
                  }
              }
              return h(k, {
                scale : c,
                index : $ ++ % 3
              });
            });
          })(), 
          pa = (function (a) 
          {
            var b = parseInt(a.style.width), d = parseInt(a.style.height), 
            h = a.offsetWidth;
            a = a.offsetHeight;
            b = h === 0 && ! isNaN(b) ? b : h;
            d = a === 0 && ! isNaN(d) ? d : a;
            return {
              resource_url : za(b, d),
              width : b,
              height : d,
              cover : false
            };
          }), 
          Aa = (function (a, b) 
          {
            var d = {
              
            };
            if(a.click_prefix != 0 && a.click_content != 0)
              for(var h = a.click_content.split(","), k = 0, c = h.length;k < c;k ++)
              {
                var e = h[k].split("|");
                d[e[0]] = a.click_prefix + "seq=" + e[1] + "&loc=" + (b.id || "");
              }
            return d;
          }), 
          ca = j.getFodderCover = (function (a) 
          {
            var b = a.childNodes;
            if(! (! b || b.length == 0))
              for(var d = b.length, h = 0;h < d;h ++)
              {
                var k = b[h];
                if(f.hasClass(k, "a_cover") && k.getAttribute("rel"))
                  return k;
                else
                  if(k = arguments.callee(k))
                    return k;
              }
          }), 
          qa = (function (a) 
          {
            try
{              var b = a.parentNode;
              return b ? b.style.filter ? true : qa(b) : false;}
            catch(d)
{              return false;}

          }), 
          da = {
            third_party_script_plus : {
              ping : u,
              render : (function (a, b) 
              {
                if(a.fodder && a.fodder[0])
                {
                  var d = a.fodder[0].resource_url, h = /.+\/(\w+\.\w+)(?:\?.+)?/g.exec(d)[1], 
                  k = h.split(".");
                  a.fodder[0].resource_url = d.replace(h, k[0] + "_" + a.oid + "_" + a.cid + "." + k[1]);
                  R(a.fodder[0], b);
                }
              })
            },
            third_party_script : {
              ping : u,
              render : (function (a, b) 
              {
                R(a.fodder[0], b);
              })
            },
            banner : {
              ping : u,
              render : (function (a, b) 
              {
                if(a.display_config && a.display_config.click_prefix && a.display_config.click_content)
                  a.fodder[0].initvars = j.mix(a.fodder[0].initvars, Aa(a.display_config, b));
                if(a.display_config && a.display_config.support_api == true)
                  a.fodder[0].initvars = j.mix(a.fodder[0].initvars, {
                    token : j.getApitoken(a.oid, a.loc)
                  });
                R(a.fodder[0], b, a.icon, "rb");
                a.display_config && a.display_config.private_setting == true && o.on(b, "mouseover", (function () 
                {
                  var e = f.$("private_setting_" + a.oid);
                  if(! e)
                  {
                    e = ra("private_setting", a.display_config.icon_location || "rt", 
                    "20px", 
                    "20px", 
                    {
                      title : "\u9690\u79c1\u8bbe\u7f6e",
                      link_to : "http://setting.snswin.qq.com"
                    });
                    e.id = "private_setting_" + a.oid;
                    b.appendChild(e);
                    var g = (function () 
                    {
                      return setTimeout((function () 
                      {
                        b.removeChild(e);
                      }), 
                      3000);
                    }), 
                    m = g();
                    o.on(e, "mouseover", (function () 
                    {
                      clearTimeout(m);
                    }));
                    o.on(e, "mouseout", (function () 
                    {
                      m = g();
                    }));
                  }
                }));
                var d = a.display_config, h = a.fodder[0], k = h ? h.cover : false, 
                c;
                if(d && d.support_api == true && k)
                  (c = ca(b)) && o.on(c, "click", (function () 
                  {
                    w(j.sns_pingurl(a, "banner_click"));
                  }));
                if(d && d.target === "_self")
                {
                  c || (c = ca(b));
                  c.target = "";
                }
                if(d && d.pLink)
                {
                  c || (c = ca(b));
                  if(c)
                  {
                    c.href = "";
                    c.target = "";
                    o.on(c, "click", (function (e) 
                    {
                      if(e.preventDefault)
                        e.preventDefault();
                      else
                        e.returnValue = false;
                      try
{                        new ActiveXObject("QQGAMEDETECT.QQGameDetectCtrl.1");
                        window.location = d.pLink;}
                      catch(g)
{                        window.open(h.link_to, "_blank");}

                    }));
                  }
                }
                if(f.hasClass(b, "check_double_filter") && k)
                {
                  c || (c = ca(b));
                  if(c && qa(c))
                  {
                    c.style.backgroundColor = "";
                    c.style.filter = "";
                    c.style.opacity = "";
                  }
                }
              })
            },
            auto : {
              ping : r,
              render : (function (a, b) 
              {
                R(pa(b), b);
              })
            },
            "default" : {
              ping : p,
              render : (function (a, b) 
              {
                R(pa(b), b);
              })
            },
            "null" : {
              ping : r,
              render : (function () 
              {
                
              })
            },
            banner_script_src : {
              ping : r,
              render : (function (a, b) 
              {
                R(a.fodder[0], b);
                s(a.fodder[1].resource_url);
              })
            },
            banner_import_monitor_url : {
              ping : r,
              render : (function (a, b) 
              {
                R(a.fodder[0], b);
                s(a.monitor_url);
              })
            },
            h_banner : {
              ping : I,
              render : (function () 
              {
                function a(c, e) 
                {
                  var g;
                  g = c.type.toLowerCase();
                  if(g == "mouseover")
                    g = c.relatedTarget || c.fromElement;
                  else
                    if(g == "mouseout")
                      g = c.relatedTarget || c.toElement;
                    else
                      return true;
                  return g && g.prefix != "xul" && ! (e.contains ? e != g && e.contains(g) : ! ! (e.compareDocumentPosition(g) & 16)) && g !== e;
                }
                function b(c, e) 
                {
                  this.adData = c;
                  this.sendPv = e;
                }
                var d = {
                  originalHeight : window.innerHeight || document.documentElement.clientHeight,
                  originalWidth : window.innerWidth || document.documentElement.clientWidth,
                  isResize : (function () 
                  {
                    var c = window.innerHeight || document.documentElement.clientHeight, 
                    e = window.innerWidth || document.documentElement.clientWidth;
                    if(this.originalHeight != c || this.originalWidth != e)
                    {
                      this.originalHeight = c;
                      this.originalWidth = e;
                      return true;
                    }
                    return false;
                  })
                }, 
                h = {
                  
                };
                window[E].adRequesterCallback = (function (c) 
                {
                  c = c[0][0];
                  var e = c.loc, g = h[e];
                  g && g.destroy();
                  h[e] = new b(c, (function (m) 
                  {
                    var q = {
                      loc : m.loc,
                      cid : m.cid || 0,
                      oid : m.oid || 0,
                      aver : m.aver || 0,
                      soid : m.soid || 0,
                      ping : m.ping,
                      pri : m.pri || 0,
                      tango : m.tango || 0,
                      dtype : m.dtype || 0,
                      targetid : m.targetid || 0,
                      pctr : m.pctr || 0,
                      btoid : m.btoid || 0,
                      btpri : m.btpri || 0,
                      extstr : m.extstr || ""
                    };
                    if(q.dtype >= 1)
                    {
                      q.keywordIds = m.keywordIds !== "" ? m.keywordIds : "";
                      q.whiteListId = m.whiteListId !== "" ? m.whiteListId : "";
                      q.ArticleId = m.ArticleId !== "" ? m.ArticleId : "";
                    }
                    Y.append(q);
                    m.monitor_url && setTimeout((function () 
                    {
                      Y.touch(m.monitor_url, true);
                    }), 
                    1000);
                    m.ext_monitor_url && setTimeout((function () 
                    {
                      var z = m.ext_monitor_url.split(" ");
                      z = z.slice(0, 3);
                      for(var C = 0, D = z.length;C < D;C ++)
                        z[C].indexOf("http://") > - 1 && Y.touch(z[C], true);
                    }), 
                    1000);
                  }));
                  h[e].init();
                });
                var k = {
                  request : (function (c) 
                  {
                    var e = format(y.lview_template, {
                      loc : c
                    });
                    s(e + "&callback=" + E + ".adRequesterCallback" + ("&rot=1&ri=hb_" + c) + V(1), 
                    (function () 
                    {
                      
                    }), 
                    y.charset);
                  })
                };
                b.prototype.init = (function () 
                {
                  var c = this.adData;
                  this.adLocationEl = document.getElementById(c.loc);
                  this.pvCounter = 0;
                  var e = this;
                  if(! this.isNullOrder())
                  {
                    var g = document.createElement("div"), m = parseInt(f.getStyle(document.getElementById("picWrap"), "top"));
                    m = ! isNaN(m) ? m : 9;
                    m = this.closeButton = f.createElement({
                      position : "absolute",
                      top : 0,
                      right : 0,
                      margin : m + 2 + "px 2px 0 0",
                      "z-index" : 100
                    }, 
                    {
                      src : j.resource("takeover_close.gif")
                    }, 
                    "img");
                    R(c.fodder[0], g);
                    f.setStyle(this.adLocationEl, {
                      display : "none",
                      zIndex : 100
                    });
                    this.adLocationEl.appendChild(g);
                    this.adLocationEl.appendChild(m);
                    this.addCover();
                    o.on(this.adLocationEl, "mouseover", (function (q) 
                    {
                      a(q, e.adLocationEl) && e.removeCover();
                    }));
                    o.on(this.adLocationEl, "mouseout", (function (q) 
                    {
                      a(q, e.adLocationEl) && e.addCover();
                    }));
                    o.on(m, "click", (function () 
                    {
                      e.close();
                    }));
                  }
                  this.resizeFunction = (function () 
                  {
                    e.resize();
                  });
                  o.on(window, "resize", this.resizeFunction);
                  setTimeout((function () 
                  {
                    var q = hdPic.fn._getUrl() + "";
                    q !== "1" && q !== "0" && e.show();
                  }), 
                  1000);
                  j.setArea(this.adData.loc, {
                    show : (function () 
                    {
                      e.show();
                    }),
                    hide : (function () 
                    {
                      e.hide();
                    })
                  });
                });
                b.prototype.destroy = (function () 
                {
                  this.resizeFunction && o.un(window, "resize", this.resizeFunction);
                  if(this.adLocationEl)
                  {
                    j.clearArea(this.adData.loc);
                    f.setStyle(this.adLocationEl, {
                      display : "none"
                    });
                    this.adLocationEl.innerHTML = "";
                  }
                });
                b.prototype.addCover = (function () 
                {
                  var c = document.getElementById("mengban_" + this.adData.loc);
                  if(! c)
                  {
                    c = document.createElement("div");
                    f.setStyle(c, {
                      position : "absolute",
                      top : 0,
                      left : 0,
                      width : "100%",
                      height : "100%",
                      opacity : "0.5",
                      filter : "alpha(opacity=50)",
                      backgroundColor : "white"
                    });
                    c.id = "mengban_" + this.adData.loc;
                    this.adLocationEl.appendChild(c);
                  }
                });
                b.prototype.removeCover = (function () 
                {
                  var c = document.getElementById("mengban_" + this.adData.loc);
                  c && this.adLocationEl.removeChild(c);
                });
                b.prototype.isNullOrder = (function () 
                {
                  return this.adData.oid + "" === "1" ? true : false;
                });
                b.prototype.show = (function () 
                {
                  this.is1stOrLast = false;
                  if(this.canBeShowed())
                  {
                    if(this.pvCounter === 0)
                      this.sendPv && this.sendPv(this.adData);
                    else
                      if(this.pvCounter === 10)
                      {
                        k.request(this.adData.loc);
                        return;
                      }
                    this.pvCounter ++;
                    var c = this;
                    setTimeout((function () 
                    {
                      if(! c.isNullOrder())
                      {
                        var e = parseInt(f.getStyle(c.sizeReferenceEl, "top"));
                        e = ! isNaN(e) ? e : 9;
                        var g = f.getStyle(c.sizeReferenceEl, "height");
                        f.setStyle(c.adLocationEl, {
                          display : "block",
                          height : g,
                          paddingTop : e + "px"
                        });
                        c.closeButton && f.setStyle(c.closeButton, {
                          margin : e + 2 + "px 2px 0 0"
                        });
                      }
                      c.resizeLock = false;
                    }), 
                    300);
                  }
                });
                b.prototype.close = (function () 
                {
                  f.setStyle(this.adLocationEl, {
                    display : "none"
                  });
                  if(! this.closeTimeCookieName)
                    this.closeTimeName = "hbanner" + this.adData.loc;
                  na.setItem(this.closeTimeCookieName, (new Date).getTime(), 1440);
                });
                b.prototype.isClosedWithinTime = (function () 
                {
                  if(! this.closeTimeCookieName)
                    this.closeTimeName = "hbanner" + this.adData.loc;
                  var c = parseInt(na.getItem(this.closeTimeCookieName) || 0);
                  return (new Date).getTime() - c > 7200000 ? false : true;
                });
                b.prototype.isSizeQualified = (function () 
                {
                  if(! this.sizeReferenceEl)
                    this.sizeReferenceEl = document.getElementById("picWrap");
                  var c = parseInt(f.getStyle(this.sizeReferenceEl, "height"));
                  return isNaN(c) || c < 500 ? false : true;
                });
                b.prototype.getIs1stOrLast = (function () 
                {
                  return this.is1stOrLast;
                });
                b.prototype.hide = (function () 
                {
                  f.setStyle(this.adLocationEl, {
                    display : "none"
                  });
                  this.is1stOrLast = true;
                });
                b.prototype.canBeShowed = (function () 
                {
                  return ! this.isClosedWithinTime() && this.isSizeQualified();
                });
                b.prototype.resize = (function () 
                {
                  if(! (F.ie && ! d.isResize()))
                  {
                    var c = this;
                    setTimeout((function () 
                    {
                      if(c.isSizeQualified())
                      {
                        if(c.canBeShowed() && ! c.getIs1stOrLast() && ! c.resizeLock)
                        {
                          c.resizeLock = true;
                          if(c.resizeHidePage === hdPic.fn._pageNow)
                          {
                            var e = parseInt(f.getStyle(c.sizeReferenceEl, "top"));
                            e = ! isNaN(e) ? e : 9;
                            var g = f.getStyle(c.sizeReferenceEl, "height");
                            f.setStyle(c.adLocationEl, {
                              display : "block",
                              height : g,
                              paddingTop : e + "px"
                            });
                            c.closeButton && f.setStyle(c.closeButton, {
                              margin : e + 2 + "px 2px 0 0"
                            });
                            c.resizeLock = false;
                          }
                          else
                            c.show();
                        }
                      }
                      else
                      {
                        f.setStyle(c.adLocationEl, {
                          display : "none"
                        });
                        c.resizeHidePage = hdPic.fn._pageNow;
                      }
                    }), 
                    1000);
                  }
                });
                j.shutongRequest = (function (c) 
                {
                  k.request(c);
                });
                return (function () 
                {
                  
                });
              })()
            },
            text : {
              ping : p,
              render : (function (a, b, d, h) 
              {
                a.need_ping && h();
                var k = a.fodder, c = k[0], e = k[1];
                k = k[2];
                var g = document.createElement("a");
                g.className = b.className;
                g.target = "_blank";
                g.href = e;
                if(k)
                  g.style.color = k;
                g.innerHTML = c;
                b.parentNode.replaceChild(g, b);
                f.$(d) && arguments.callee(a, f.$(d), d, h);
              })
            },
            richtext : {
              ping : r,
              render : (function (a, b) 
              {
                var d = a.fodder, h = d[0], k = d[1];
                d = d[2];
                var c = document.createElement("a");
                c.target = "_blank";
                c.href = k;
                if(d)
                  c.style.color = d;
                c.innerHTML = h;
                b.parentNode.replaceChild(c, b);
                f.setStyle(b, {
                  height : "12px"
                });
              })
            },
            banner_text : {
              ping : r,
              render : (function (a, b) 
              {
                var d = a.fodder[0], h = a.fodder[1], k = d.link_to;
                if(k.indexOf("?") > - 1)
                  if(k.lastIndexOf("&") === k.length - 1)
                  {
                    d.link_to += "clicktype=1";
                    k += "clicktype=2";
                  }
                  else
                  {
                    d.link_to += "&clicktype=1";
                    k += "&clicktype=2";
                  }
                else
                {
                  d.link_to += "?clicktype=1";
                  k += "?clicktype=2";
                }
                R(d, b);
                d = document.createElement("div");
                var c = document.createElement("a"), e = h.text_content;
                c.href = k + V(1);
                c.target = "_blank";
                c.innerHTML = e;
                k = a.display_config.text_position;
                if(h = h.style)
                {
                  h = h.split(";");
                  e = h.length;
                  for(var g = {
                    
                  }, m = 0;m < e;m ++)
                  {
                    var q = h[m].split(":");
                    g[q[0]] = q[1];
                  }
                  f.setStyle(c, g);
                }
                else
                  f.setStyle(c, {
                    paddingBottom : "3px",
                    lineHeight : "1.5",
                    textDecoration : "none",
                    textSize : "16px",
                    background : "url(http://img1.gtimg.com/fashion/pics/hv1/252/73/1392/90533667.png) repeat-x left bottom"
                  });
                switch(k){
                  
                  default:
                    f.setStyle(d, {
                      position : "absolute",
                      left : "0px",
                      width : "100%",
                      bottom : "-27px",
                      textAlign : "center"
                    });
                  
                }
                d.appendChild(c);
                b.appendChild(d);
              })
            },
            script_src : {
              ping : p,
              render : (function (a, b, d, h) 
              {
                if(ga() >= 8)
                {
                  s(a.fodder[0].resource_url);
                  h();
                }
              })
            },
            adbox : {
              ping : p,
              render : (function (a, b, d, h) 
              {
                j.importScript(a.fodder[0].resource_url + "?v=" + a.fodder[0].version, 
                (function () 
                {
                  var k = j["adbox_" + a.oid], c = j.adbox_ADBOXCALLBACK, e = j["adbox_" + a.oid + "_" + a.cid];
                  if(e)
                    e(a, b, d, h);
                  else
                    if(c)
                      c(a, b, d, h);
                    else
                      k && k(a, b, d, h);
                }), 
                "utf8");
              })
            }
          }, 
          S = {
            
          }, 
          ha = {
            
          }, 
          sa;
          (function () 
          {
            var a = false, b = {
              
            }, d = y.ping_effect_height, 
            h = y.pre_load_offset, 
            k = 0, 
            c = (function (m) 
            {
              var q = f.getDocumentScrollTop() + f.getViewportHeight();
              if(! (! m && q <= k))
              {
                k = q;
                var z = [];
                each(b, (function (D, J) 
                {
                  if(m || ! D.y)
                  {
                    var T = f.getXY(D.el);
                    D.y = T[1];
                  }
                  if(D.y <= q + h)
                    if(! D.rendered)
                    {
                      D.render();
                      D.rendered = true;
                    }
                  if(D.y <= q - d)
                    if(! D.pinged)
                    {
                      D.ping();
                      D.pinged = true;
                    }
                  D.pinged && D.rendered && z.push(J);
                }));
                each(z, (function (D) 
                {
                  delete b[D];
                }));
                var C = true;
                each(b, (function () 
                {
                  C = false;
                }));
                if(C)
                {
                  o.un(window, "resize", e);
                  o.un(window, "scroll", e);
                  a = false;
                }
              }
            }), 
            e = (function () 
            {
              c(false);
            });
            j.forceCheckRender = (function () 
            {
              c(true);
            });
            var g = buffer((function () 
            {
              if(! a)
              {
                e();
                o.on(window, "resize", e);
                o.on(window, "scroll", e);
                a = true;
              }
            }), 
            100);
            j.renderAll = (function () 
            {
              each(b, (function (m) 
              {
                if(! m.rendered)
                {
                  m.render();
                  m.rendered = true;
                }
              }));
              b = {
                
              };
              o.un(window, "resize", e);
              o.un(window, "scroll", e);
              a = false;
            });
            sa = (function (m, q, z) 
            {
              b[m] = {
                el : f.$(m),
                render : q,
                rendered : false,
                ping : z,
                pinged : false
              };
              g();
            });
          })();
          var aa = {
            
          }, ea = {
            
          }, 
          W = (function (a, b, d) 
          {
            var h = f.$(b);
            if(h)
            {
              d = 0;
              h.setAttribute("oid", a.oid);
              h.setAttribute("display", a.display);
              if(h.getAttribute("immediately"))
                d = r;
              var k = j.getDisplayHandler(a.display), c = (function () 
              {
                var g = b.indexOf("SLOT");
                if(g > - 1)
                  b = b.substr(0, g);
                Y.append({
                  loc : b,
                  cid : a.cid || 0,
                  oid : a.oid || 0,
                  aver : a.aver || 0,
                  soid : a.soid || 0,
                  ping : a.ping,
                  pri : a.pri || 0,
                  tango : a.tango || 0,
                  dtype : a.dtype || 0,
                  targetid : a.targetid || 0,
                  pctr : a.pctr || 0,
                  btoid : a.btoid || 0,
                  btpri : a.btpri || 0,
                  extstr : a.extstr || "",
                  chl : a.chl || 0
                });
                a.monitor_url && setTimeout((function () 
                {
                  Y.touch(a.monitor_url, true);
                }), 
                1000);
                a.ext_monitor_url && setTimeout((function () 
                {
                  var m = a.ext_monitor_url.split(" ");
                  m = m.slice(0, 3);
                  for(var q = 0, z = m.length;q < z;q ++)
                    m[q].indexOf("http://") > - 1 && Y.touch(m[q], true);
                }), 
                1000);
              }), 
              e = (function () 
              {
                k.render(a, h, b, c);
                a.plugins && l((function () 
                {
                  j.addPlugins(a.plugins, a, h, b);
                }));
              });
              d = d || k.ping;
              if(! y.lazy_render && d == u)
                d = r;
              switch(d){
                case r:
                  e();
                  c();
                  break;

                case u:
                  sa(b, e, c);
                  break;

                case I:
                  e();
                  break;

                case p:
                  e();

                
              }
            }
            else
              d || o.ready((function () 
              {
                W(a, b, true);
              }));
          }), 
          ta = (function (a) 
          {
            a = f.$(a);
            if(! a || f.getStyle(a, "display") == "none")
              return ha;
            return {
              display : "auto",
              oid : 89,
              cid : 0
            };
          }), 
          ia = (function () 
          {
            each(arguments, (function (a) 
            {
              if(! aa[a] && ! S[a])
                S[a] = ta(a);
            }));
            each(S, (function (a, b) 
            {
              if(! aa[b])
              {
                if(y.runat != "weibo")
                  f.$(b) && f.$(b).getAttribute("rerender") == "1" || (aa[b] = true);
                if(a !== ha)
                {
                  da[a.display] ? W(a, b) : l((function () 
                  {
                    W(a, b);
                  }));
                  f.$(b) && f.$(b).getAttribute("rerender") == "1" || delete S[b];
                }
              }
            }));
            Q.append("start_draw_areas");
          }), 
          Ba = (function (a) 
          {
            if(! aa[a] && ! S[a] && ! ea[a])
              return ea[a] = true;
          }), 
          ua = j.findAreas = (function () 
          {
            Q.append("search_areas");
            var a = map(f.getElementsByClassName(y.area_class, y.element_tags), 
            (function (b) 
            {
              return b.id || (b.id = generateId());
            }));
            Q.append("end_search_areas");
            return a;
          }), 
          Z = "&rot=1", 
          va = {
            
          }, 
          ja = j.request = (function (a) 
          {
            if(j.rot == "norot")
              Z = "";
            var b;
            b = a === true ? ua() : filter(typeof arguments[0] == "string" ? arguments : ua(), (function () 
            {
              return true;
            }));
            if(typeof arguments[0] === "string")
              for(var d = {
                "l.qq.com" : {
                  charset : y.charset,
                  lview_template : y.lview_template,
                  data : []
                }
              }, 
              h = 0, 
              k = b.length;h < k;h ++)
                d["l.qq.com"].data.push(b[h]);
            else
              d = j.location.getLview();
            j.each(d, (function (c, e) 
            {
              c.data = filter(c.data, Ba);
              if(c.data.length > 0)
              {
                var g = c.data.join(",").indexOf("QQ_takeover") >= 0 ? (function () 
                {
                  var C = [];
                  Q.append("end_request_lview");
                  clearTimeout(z);
                  var D = S.QQ_takeover;
                  D.oid !== "1" && D.oid != "100" && C.push("takeover");
                  ia.apply(window, c.data);
                  each(c.data, (function (J) 
                  {
                    delete ea[J];
                  }));
                  window.QQindexAd && typeof window.QQindexAd === "function" && QQindexAd({
                    displayCode : C
                  });
                }) : (function () 
                {
                  Q.append("end_request_lview");
                  clearTimeout(z);
                  ia.apply(window, c.data);
                  each(c.data, (function (C) 
                  {
                    delete ea[C];
                  }));
                });
                Q.append("request_lview");
                var m = y.lview_template.replace("l.qq.com", e), q = "&ri=" + e.substr(0, 2);
                if(va[e] && Z.indexOf("ri") === - 1)
                  q = q;
                else
                {
                  q = Z.indexOf("ri") > - 1 ? Z : Z + q;
                  va[e] = true;
                }
                s(format(m, {
                  loc : c.data.join(","),
                  oid : y.oid,
                  cid : y.cid
                }) + "&callback=" + E + ".callbackarea" + q + "&chl=" + P + V(1), 
                g, 
                c.charset);
                var z = setTimeout(g, y.lview_time_out * 1000);
              }
            }));
            ia();
          });
          y.execute_on_ready && o.ready(ja);
          var ka = (function (a) 
          {
            return ! ! a && typeof a == "object" && typeof a.length == "number";
          }), 
          Ca = (function (a, b, d) 
          {
            return a + (b ? (a.indexOf("?") == - 1 ? "?" : "&") + serializeDictionary("=", "&", false, d)(b) : "");
          }), 
          Da = (function (a, b, d) 
          {
            var h = generateId();
            window[h] = (function () 
            {
              d.apply(null, arguments);
              setTimeout((function () 
              {
                try
{                  delete window[h];}
                catch(k)
{                  window[h] = undefined;}

              }), 
              1);
            });
            if(y.collect)
              if(y.runat != "qq")
                b = mix(b, V());
            s(Ca(a, mix({
              callback : h
            }, b), 
            false), 
            null, 
            y.charset);
          }), 
          wa = (function (a, b, d) 
          {
            Da(a, {
              loc : b.join(",")
            }, d);
          }), 
          Ea = (function (a, b, d) 
          {
            d(map(filter(f.getElementsByClassName(a, b), (function (h) 
            {
              return ! ! h.id;
            })), 
            (function (h) 
            {
              return h.id;
            })));
          }), 
          la = j.requestText = (function () 
          {
            Ea("w-l-qq-com", ["span", ], (function (a) 
            {
              a = unique(a);
              if(a.length != 0)
              {
                for(var b = [];a.length > 24;)
                  b.push(a.splice(0, 24));
                b.push(a.splice(0, a.length));
                var d = 0;
                for(a = b.length;d < a;d ++)
                  (function () 
                  {
                    var h = b[d];
                    wa("http://w.l.qq.com/lview?type=text", b[d], (function (k) 
                    {
                      var c;
                      if(ka(k))
                        c = k;
                      else
                      {
                        c = [];
                        each(k, (function (e) 
                        {
                          c.push(e);
                        }));
                      }
                      each(c, (function (e, g) 
                      {
                        var m = h[g];
                        each(e, (function (q) 
                        {
                          q.loc = m;
                        }));
                      }));
                      each(c, (function (e) 
                      {
                        each(e, (function (g) 
                        {
                          W(g, g.loc);
                        }));
                      }));
                    }));
                  })();
              }
            }));
          });
          o.ready(la);
          var Fa = y.MAX_SLOT_COUNT, Ga = 0, ma = {
            
          }, 
          Ha = (function (a, b, d, h) 
          {
            var k = document.getElementsByTagName("script");
            k = k[k.length - 1];
            b = f.createElement({
              width : b + "px",
              height : d + "px",
              overflow : "hidden"
            });
            b.id = h || y.runat != "discuz" ? a : a + "SLOT" + generateId();
            k.parentNode.replaceChild(b, k);
            return b;
          });
          j.addStaticSlot = (function (a) 
          {
            var b = a.type || "";
            if(! b)
              if(++ Ga > Fa)
                return;
            var d = a.id, h = Ha(d, a.width || 0, a.height || 0, b).id;
            if(! a.data)
            {
              wa(y.lview_template.replace("loc={loc}", ""), [d, ], (function (k) 
              {
                if(k && k.length)
                {
                  var c = k[0].display;
                  if(indexOf(["turner", "focusimage", ], c) != - 1)
                  {
                    k = {
                      display : c,
                      data : k
                    };
                    ma[h] = true;
                    l((function () 
                    {
                      W(k, h);
                    }));
                  }
                  else
                    each(k, (function (e) 
                    {
                      ka(e) || (e = [e, ]);
                      each(e, (function (g) 
                      {
                        g = Ia(g);
                        g.loc = h;
                        ma[h] = true;
                        da[g.display] ? W(g, g.loc) : l((function () 
                        {
                          W(g, g.loc);
                        }));
                      }));
                    }));
                }
              }));
              setTimeout((function () 
              {
                ma[h] || W(ta(d), d);
              }), 
              6000);
            }
          });
          j.analyze = (function (a) 
          {
            l((function () 
            {
              s(a);
            }));
          });
          j.AdDetectingLoader = {
            parseParam : (function () 
            {
              var a = {
                
              }, b = /^\#(.*)/.exec(window.location.hash);
              b = b ? b[1] : "";
              b = b.split("&");
              var d, h = b.length, k;
              for(d = 0;d < h;d ++)
              {
                k = b[d].split("=");
                a[k[0]] = k[1];
              }
              return a;
            }),
            load : (function (a) 
            {
              var b = a.url || j.resource("res/ad_detecting.js"), d = a.delay || 0;
              l((function () 
              {
                setTimeout((function () 
                {
                  s(b);
                }), 
                d * 1000);
              }));
            }),
            init : (function (a) 
            {
              if(a.autoLoad === true)
              {
                a = this.parseParam();
                a.crystal_mode === "1" && this.load(a);
              }
            })
          };
          j.AdDetectingLoader.init({
            autoLoad : true
          });
          var M = {
            renderclick : 1,
            maxclick_num : 5,
            repeatTimer : null,
            preindex : null,
            name : "couplet",
            flag : 0
          }, 
          N = {
            renderclick : 1,
            maxclick_num : 10,
            repeatTimer : null,
            preindex : null,
            name : "central",
            flag : 0,
            loc_id : ""
          };
          j.render = (function (a) 
          {
            function b(g, m) 
            {
              if(g.flag == 1)
                d(g.name);
              else
                if(g.flag != 2)
                  if(g.flag == 0)
                    if(g.repeatTimer === null)
                    {
                      m && setTimeout((function () 
                      {
                        m();
                      }), 
                      10);
                      var q = 0;
                      g.repeatTimer = setInterval((function () 
                      {
                        q ++;
                        q > 20 && clearInterval(g.repeatTimer);
                        g.flag != 0 ? clearInterval(g.repeatTimer) : d(g.name);
                      }), 
                      500);
                    }
            }
            function d(g) 
            {
              if(g == "central")
                a : {
                  var m = "";
                  g = k;
                  var q = c;
                  if(N.loc_id)
                    m = N.loc_id;
                  else
                  {
                    m = j.dom.getElementsByClassName("central_center", ["div", ]);
                    if(m.length > 0)
                    {
                      m = m[0].id;
                      N.loc_id = m;
                      N.flag = 1;
                    }
                    else
                      break a;
                  }
                  m = j.getArea(m);
                  var z = false;
                  m.invoke("close");
                  q = g < q - 10 && g != 0 ? true : false;
                  if(q)
                    z = true;
                  if(N.renderclick < N.maxclick_num)
                  {
                    if(N.preindex != g)
                    {
                      if(N.preindex !== null && z)
                        N.renderclick += 1;
                      N.preindex = g;
                    }
                  }
                  else
                  {
                    if(z)
                    {
                      N.renderclick = 1;
                      m.invoke("open");
                    }
                    N.preindex = g;
                  }
                }
              else
                g == "couplet" && e(h, k, c);
            }
            var h = a.loc || "", k = parseInt(a.curr, 10), c = parseInt(a.total, 10);
            k = isNaN(k) ? 0 : k;
            c = isNaN(c) ? 0 : c;
            var e = (function (g, m, q) 
            {
              var z = j.getArea(g);
              M.flag = 1;
              var C = false;
              if(m != 0 && m != q - 1)
              {
                C = true;
                z.invoke("show");
              }
              else
                z.invoke("hide");
              if(M.renderclick < M.maxclick_num)
              {
                if(M.preindex != m)
                {
                  if(M.preindex !== null && C)
                    M.renderclick += 1;
                  M.preindex = m;
                }
              }
              else
                if(C)
                {
                  M.renderclick = 1;
                  M.preindex = m;
                  M.flag = 0;
                  M.repeatTimer = null;
                  delete S[g];
                  delete aa[g];
                  z.invoke("remove");
                  j.clearArea(g);
                  b(M, (function () 
                  {
                    Z = "&rot=1&ri=0";
                    ja(g);
                  }));
                }
            });
            b(M, (function () 
            {
              var g = h;
              Z = "&rot=1&ri=0";
              ja(g);
            }));
            b(N);
          });
          var Ia = (function (a) 
          {
            if(a.oid == 1)
              a.display = "null";
            else
              if(a.oid == 100)
                a.display = "auto";
            return a;
          });
          j.area = (function (a) 
          {
            if(a)
            {
              var b = a.id;
              S[b] = ha;
              return (function () 
              {
                if(arguments.length != 0)
                {
                  var d = arguments[A % arguments.length];
                  if(d.oid == 1)
                    d.display = "null";
                  if(d.oid == 100)
                    d.display = "auto";
                  var h = d.display;
                  if(indexOf(["turner", "focusimage", ], h) != - 1)
                    d = {
                      display : h,
                      data : arguments
                    };
                  S[b] = d;
                }
              });
            }
          });
          j.callbackarea = (function (a) 
          {
            for(var b = 0, d = a.length;b < d;b ++)
              if(ka(a[b]))
              {
                if(a[b][0].loc)
                {
                  var h = j.area({
                    id : a[b][0].loc
                  });
                  h.apply(null, a[b]);
                }
              }
              else
                if(a[b].loc)
                {
                  h = j.area({
                    id : a[b].loc
                  });
                  h.apply(null, [a[b], ]);
                }
          });
          j.getDisplayHandler = (function (a) 
          {
            return da[a];
          });
          j.setDisplayHandler = (function (a) 
          {
            mix(da, a);
          });
          j.ime = {
            _isAbleInput : true,
            _isChangeCursor : true,
            _target : "",
            _swf : [],
            _element : ba,
            _setTxt : (function (a) 
            {
              this._element.value = a;
            }),
            setFocus : (function (a, b, d, h, k, c) 
            {
              this._isAbleInput = a;
              this._target = d;
              d = f.getXY(f.$(b));
              f.setStyle(this._element, {
                left : d[0] + "px",
                top : d[1] + "px",
                cursor : "none"
              });
              this._element.setAttribute("swfid", b);
              this._element.focus();
              this._element.blur();
              this._element.select();
              if(a)
              {
                this._isChangeCursor = false;
                this._setTxt(h);
                this._isChangeCursor = true;
                this.setCaretPosition(this._element, k, c);
              }
              else
                this._setTxt("");
            }),
            immediately : (function (a) 
            {
              var b = this._element = ba, d = this;
              F.ie ? o.on(b, "propertychange", (function (h) 
              {
                h.propertyName == "value" && d.webChange(d, a);
              })) : o.on(b, "input", (function () 
              {
                d.webChange(d, a);
              }), 
              true);
              this.listenKey(d, a);
            }),
            webChange : (function (a, b) 
            {
              a._isAbleInput && a._isChangeCursor && a.outPut(a, b);
            }),
            outPut : (function (a, b) 
            {
              var d = j.getFlashObject(b), h = a._element.getAttribute("swfid");
              a._target && b == h && d.getInput && setTimeout((function () 
              {
                d.getInput(a._element.value, a._target, a.getCursortPosition(a._element));
              }), 
              100);
            }),
            getCursortPosition : (function (a) 
            {
              var b = 0, d = 0;
              if(document.selection)
              {
                a.focus();
                b = document.selection.createRange();
                d = b.text.length;
                b.moveStart("character", - a.value.length);
                b = b.text.length;
                d = b - d;
              }
              else
                if(a.selectionStart || a.selectionStart == "0")
                {
                  d = a.selectionStart;
                  b = a.selectionEnd;
                }
              return [d, b, ];
            }),
            setCaretPosition : (function (a, b, d) 
            {
              if(a.setSelectionRange)
              {
                a.focus();
                a.setSelectionRange(b, d);
              }
              else
                if(a.createTextRange)
                {
                  a = a.createTextRange();
                  a.collapse(true);
                  a.moveEnd("character", d);
                  a.moveStart("character", b);
                  a.select();
                }
            }),
            listenKey : (function (a, b) 
            {
              if(document.addEventListener)
                document.addEventListener("keydown", (function (d) 
                {
                  a.getKey(d, a, b);
                }), 
                true);
              else
                if(document.attachEvent)
                  document.attachEvent("onkeydown", (function (d) 
                  {
                    a.getKey(d, a, b);
                  }));
                else
                  document.onkeydown = (function (d) 
                  {
                    a.getKey(d, a, b);
                  });
            }),
            getKey : (function (a, b, d) 
            {
              a = a || window.event;
              a = a.which ? a.which : a.keyCode;
              if(a == 35 || a == 36 || a == 37 || a == 39 || a == 8 || a == 46)
                b.outPut(b, d);
            })
          };
          j.getAntiCSRFToken = i;
          j.getApitoken = (function (a, b) 
          {
            function d(e) 
            {
              if(e >= 0 && e <= 9)
                e = "0".charCodeAt(0) + e;
              else
                if(e >= 10 && e <= 35)
                  e = e - 10 + "a".charCodeAt(0);
                else
                  if(e >= 36 && e <= 61)
                    e = e - 36 + "A".charCodeAt(0);
                  else
                    return - 1;
              return String.fromCharCode(e);
            }
            var h = "1" + d((function (e) 
            {
              var g = 0;
              do
              {
                g ++;
                e /= 10;
              }while(parseInt(e));
              return g;
            })(a)) + a, 
            k = "2" + d(b.length) + b, 
            c = i();
            c = "3" + d(c.length) + c;
            return "1" + h + k + c;
          });
          var Ja = Class.create({
            init : (function () 
            {
              this.invokes = [];
            }),
            invoke : (function () 
            {
              this.invokes.push(arguments);
            }),
            set : (function (a) 
            {
              this.invoke = (function (b, d) 
              {
                if(a[b])
                  return a[b].apply(a, d || []);
              });
              each(this.invokes, (function (b) 
              {
                this.invoke(b[0], b[1]);
              }), 
              this);
            })
          });
          if(typeof j.json !== "object")
            j.json = {
              
            };
          (function () 
          {
            function a(q) 
            {
              return q < 10 ? "0" + q : q;
            }
            function b(q) 
            {
              k.lastIndex = 0;
              return k.test(q) ? '"' + q.replace(k, (function (z) 
              {
                var C = g[z];
                return typeof C === "string" ? C : "\\u" + ("0000" + z.charCodeAt(0).toString(16)).slice(- 4);
              })) + '"' : '"' + q + '"';
            }
            function d(q, z) 
            {
              var C, D, J, T, O = c, L, G = z[q];
              if(G && typeof G === "object" && typeof G.toJSON === "function")
                G = G.toJSON(q);
              if(typeof m === "function")
                G = m.call(z, q, G);
              switch(typeof G){
                case "string":
                  return b(G);

                case "number":
                  return isFinite(G) ? String(G) : "null";

                case "boolean":
                  

                case "null":
                  return String(G);

                case "object":
                  if(! G)
                    return "null";
                  c += e;
                  L = [];
                  if(Object.prototype.toString.apply(G) === "[object Array]")
                  {
                    T = G.length;
                    for(C = 0;C < T;C += 1)
                      L[C] = d(C, G) || "null";
                    J = L.length === 0 ? "[]" : c ? "[\n" + c + L.join(",\n" + c) + "\n" + O + "]" : "[" + L.join(",") + "]";
                    c = O;
                    return J;
                  }
                  if(m && typeof m === "object")
                  {
                    T = m.length;
                    for(C = 0;C < T;C += 1)
                      if(typeof m[C] === "string")
                      {
                        D = m[C];
                        if(J = d(D, G))
                          L.push(b(D) + (c ? ": " : ":") + J);
                      }
                  }
                  else
                    for(D in G)
                      if(Object.prototype.hasOwnProperty.call(G, D))
                        if(J = d(D, G))
                          L.push(b(D) + (c ? ": " : ":") + J);
                  J = L.length === 0 ? "{}" : c ? "{\n" + c + L.join(",\n" + c) + "\n" + O + "}" : "{" + L.join(",") + "}";
                  c = O;
                  return J;

                
              }
            }
            if(typeof Date.prototype.toJSON !== "function")
            {
              Date.prototype.toJSON = (function () 
              {
                return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + a(this.getUTCMonth() + 1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "Z" : null;
              });
              if(typeof String.prototype.toJSON !== "function")
                String.prototype.toJSON = (function () 
                {
                  return typeof this.valueOf === "function" ? this.valueOf() : this.toString();
                });
              if(typeof Number.prototype.toJSON !== "function")
                Number.prototype.toJSON = (function () 
                {
                  return typeof this.valueOf === "function" ? this.valueOf() : this.toString();
                });
              if(typeof Boolean.prototype.toJSON !== "function")
                Boolean.prototype.toJSON = (function () 
                {
                  return typeof this.valueOf === "function" ? this.valueOf() : this.toString();
                });
            }
            var h = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, 
            k = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, 
            c, 
            e, 
            g = {
              "\\u0008" : "\\b",
              "\\t" : "\\t",
              "\\n" : "\\n",
              "\\u000c" : "\\f",
              "\\r" : "\\r",
              '"' : '\\"',
              "\\\\" : "\\\\"
            }, 
            m;
            if(typeof j.json.stringify !== "function")
              j.json.stringify = (function (q, z, C) 
              {
                var D;
                e = c = "";
                if(typeof C === "number")
                  for(D = 0;D < C;D += 1)
                    e += " ";
                else
                  if(typeof C === "string")
                    e = C;
                if((m = z) && typeof z !== "function" && (typeof z !== "object" || typeof z.length !== "number"))
                  throw Error("namespace.json.stringify");
                return d("", {
                  "" : q
                });
              });
            if(typeof j.json.parse !== "function")
              j.json.parse = (function (q, z) 
              {
                function C(J, T) 
                {
                  var O, L, G = J[T];
                  if(G && typeof G === "object")
                    for(O in G)
                      if(Object.prototype.hasOwnProperty.call(G, O))
                      {
                        L = C(G, O);
                        if(L !== undefined)
                          G[O] = L;
                        else
                          delete G[O];
                      }
                  return z.call(J, T, G);
                }
                var D;
                q = String(q);
                h.lastIndex = 0;
                if(h.test(q))
                  q = q.replace(h, (function (J) 
                  {
                    return "\\u" + ("0000" + J.charCodeAt(0).toString(16)).slice(- 4);
                  }));
                if(/^[\],:{}\s]*$/.test(q.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, 
                "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
                {
                  D = eval("(" + q + ")");
                  return typeof z === "function" ? C({
                    "" : D
                  }, "") : D;
                }
                throw new SyntaxError("namespace.json.parse");
              });
          })();
          la = Class.create({
            init : (function () 
            {
              this.default_setting = {
                lview : "l.qq.com",
                charset : j.crystal_args.charset,
                lview_template : j.crystal_args.lview_template
              };
              this.lview = {
                
              };
            }),
            getLview : (function () 
            {
              return this.parseConfig(this.findLoc(j.crystal_args.area_class));
            }),
            findLoc : (function (a) 
            {
              return f.getElementsByClassName(a, ["div", "span", ]);
            }),
            getLviewByLoc : (function (a) 
            {
              return f.$(a).getAttribute("adconfig_lview");
            }),
            createLviewCache : (function () 
            {
              return {
                
              };
            }),
            parseConfig : (function (a) 
            {
              var b = this.createLviewCache();
              j.each(a, (function (d) 
              {
                var h = d.getAttribute("adconfig") || "{}";
                h = eval("(" + h + ")");
                var k = d.id;
                h = j.mix({
                  
                }, this.default_setting, 
                h);
                for(var c in h)
                  d.setAttribute("adconfig_" + c, h[c]);
                if(typeof b[h.lview] != "undefined")
                  j.indexOf(b[h.lview].data, k) > - 1 || b[h.lview].data.push(k);
                else
                  b[h.lview] = {
                    lview_template : h.lview_template,
                    charset : h.charset,
                    data : [k, ]
                  };
              }), 
              this);
              return b;
            })
          });
          j.location = new la;
          (function () 
          {
            var a = {
              
            };
            j.clearArea = (function (b) 
            {
              a[b] = null;
            });
            j.getArea = (function (b) 
            {
              return a[b] || (a[b] = new Ja);
            });
            j.setArea = (function (b, d) 
            {
              j.getArea(b).set(d);
            });
          })();
          var R = j.renderFodder = (function (a, b, d, h) 
          {
            if(b)
            {
              a.width && f.setStyle(b, {
                display : "block",
                width : a.width,
                height : a.height
              });
              Ka[B(a.resource_url)](a, b);
              var k = f.getStyle(b, "position");
              if(k == "static" || k == "")
                b.style.position = "relative";
              if(a.cover)
              {
                a.link_to = a.link_to.indexOf("?") > - 1 ? a.link_to + V(1) : a.link_to + "?" + V(1);
                b.appendChild(La(a.width, a.height, a.link_to));
              }
              d && h && b.appendChild(ra(d, h, a.width, a.height));
            }
          }), 
          ra = j.createIcon = (function (a, b, d, h, k) 
          {
            k = mix({
              
            }, k);
            var c = {
              
            }, e = "", g = k.title || "";
            k = k.link_to || "";
            if(b == "rb")
              c = {
                right : 0,
                bottom : 0
              };
            else
              if(b == "lb")
                c = {
                  left : 0,
                  bottom : 0
                };
              else
                if(b == "rt")
                  c = {
                    right : 0,
                    top : 0
                  };
                else
                  if(b == "lt")
                    c = {
                      left : 0,
                      top : 0
                    };
            if(a == "adwin")
            {
              e = j.resource_swf("adwin_" + b + ".png");
              c = mix(c, {
                width : "55px",
                height : "20px"
              });
              k = "http://union.discuz.qq.com";
            }
            else
              if(a == "soso")
                c = mix(c, {
                  width : 0,
                  height : 0
                });
              else
              {
                e = j.resource_swf("icon_" + a + ".png");
                c = mix(c, {
                  width : d,
                  height : h
                });
              }
            if(F.ie == 6)
              c.filter = format("progid:DXImageTransform.Microsoft.AlphaImageLoader(src='{uri}')", 
              {
                uri : e
              });
            else
              c["background-image"] = format("url({uri})", {
                uri : e
              });
            a = mix({
              position : "absolute",
              "z-index" : 11,
              cursor : "pointer"
            }, 
            c);
            return a = f.createElement(a, {
              "class" : "absolute a_cover",
              href : x(k),
              target : "_blank",
              title : g
            }, 
            "a");
          }), 
          La = j.createCover = (function (a, b, d, h, k) 
          {
            return f.createElement({
              position : "absolute",
              width : a + "px",
              height : b + "px",
              left : h || "0px",
              top : k || "0px",
              cursor : "pointer",
              "z-index" : 10,
              "background-color" : "#fff",
              filter : "alpha(opacity=0)",
              opacity : 0
            }, 
            {
              "class" : "absolute a_cover",
              href : x(d),
              target : "_blank",
              rel : "nofollow"
            }, 
            "a");
          }), 
          Ka = (function () 
          {
            var a = (function (c) 
            {
              return map(c, (function (e, g) 
              {
                return format('<param name="{name}" value="{value}"></param>', {
                  name : g,
                  value : e
                });
              })).join("");
            }), 
            b = f.buildHTML, 
            d = (function (c, e, g) 
            {
              g.innerHTML = b(c, {
                href : x(e),
                target : "_blank"
              }, 
              "a");
              return g.firstChild;
            }), 
            h = (function (c, e) 
            {
              var g = {
                display : "block",
                cursor : "pointer",
                width : c.width + "px",
                height : c.height + "px",
                "background-image" : format("url({uri})", {
                  uri : c.resource_url
                })
              };
              return d(g, c.link_to, e);
            }), 
            k = (function (c, e) 
            {
              var g = {
                display : "block",
                cursor : "pointer",
                width : c.width + "px",
                height : c.height + "px",
                filter : format("progid:DXImageTransform.Microsoft.AlphaImageLoader(src='{uri}')", 
                {
                  uri : c.resource_url
                })
              };
              return d(g, c.link_to, e);
            });
            return {
              jpg : h,
              jpeg : h,
              png : F.ie == 6 ? k : h,
              gif : h,
              swf : (function (c, e) 
              {
                var g = {
                  allowscriptaccess : "always",
                  wmode : "opaque",
                  quality : "high"
                };
                c.params && mix(g, c.params);
                var m = c.initvars || {
                  
                };
                if(c.link_to)
                  m.adlink = c.link_to;
                if(ga() >= 11)
                  m.ime = true;
                if(m.ime)
                  m.setFocus = E + ".ime.setFocus";
                var q = {
                  id : generateId()
                };
                m.swfid = q.id;
                g.flashvars = serializeQuery(m);
                if(F.ie)
                {
                  q.classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";
                  g.movie = c.resource_url;
                }
                else
                {
                  g.type = "application/x-shockwave-flash";
                  q.data = c.resource_url;
                }
                e.innerHTML = b({
                  outline : "none",
                  width : c.width + "px",
                  height : c.height + "px"
                }, 
                q, 
                "object", 
                a(g));
                var z = e.firstChild;
                o.on(window, "unload", (function () 
                {
                  if(z && z.parentNode)
                  {
                    if(F.ie)
                      for(var C in z)
                        if(typeof z[C] == "function")
                          z[C] = null;
                    z.parentNode.removeChild(z);
                  }
                }));
                return z;
              }),
              xap : (function (c, e) 
              {
                var g = mix({
                  source : c.resource_url,
                  windowless : true
                }, 
                c.params), 
                m = mix({
                  adlink : c.link_to
                }, 
                c.initvars);
                g.initParams = serializeQuery(m);
                e.innerHTML = b({
                  width : c.width + "px",
                  height : c.height + "px"
                }, 
                {
                  type : "application/x-silverlight",
                  data : "data:application/x-silverlight,"
                }, 
                "object", 
                a(g));
                return e.firstChild;
              }),
              html : (function (c, e) 
              {
                var g = c.resource_url;
                if(c.link_to)
                {
                  var m = g.indexOf("?") > - 1 ? true : false;
                  g += m ? "&tclick=" : "?tclick=";
                  g += encodeURIComponent(c.link_to);
                }
                f.$(e).innerHTML = '<iframe frameborder="0" src="' + g + '" scrolling="no" marginwidth="0" marginheight="0" style="width:' + c.width + "px;height:" + c.height + 'px;"></iframe>';
              })
            };
          })();
        })((function () 
        {
          var f = {
            
          }, o = {
            HYPHEN : /(-[a-z])/i,
            ROOT_TAG : /^body|html$/i
          }, 
          n = (function (l) 
          {
            if(! o.HYPHEN.test(l))
              return l;
            if(f[l])
              return f[l];
            for(var p = l;o.HYPHEN.exec(p);)
              p = p.replace(RegExp.$1, RegExp.$1.substr(1).toUpperCase());
            return f[l] = p;
          }), 
          i = (function () 
          {
            var l = /left|top|right|bottom|width|height/, p = (function (r, u) 
            {
              if(l.test(r) && typeof u == "number")
                u += "px";
              return u;
            });
            return F.ie ? (function (r, u, I) 
            {
              u = n(u);
              switch(u){
                case "opacity":
                  r.style.filter = "alpha(opacity=" + I * 100 + ")";
                  if(! r.currentStyle || ! r.currentStyle.hasLayout)
                    r.style.zoom = 1;
                  break;

                case "float":
                  u = "styleFloat";

                default:
                  r.style[u] = p(u, I);
                
              }
            }) : (function (r, u, I) 
            {
              u = n(u);
              if(u == "float")
                u = "cssFloat";
              r.style[u] = p(u, I);
            });
          })(), 
          B = (function (l, p, r, u) 
          {
            return format('<{tag} {attrs}style="{styles}">{inner}</{tag}>', {
              tag : r || "div",
              attrs : serializeAttrs(p || {
                
              }),
              styles : serializeStyles(l),
              inner : u || ""
            });
          }), 
          x = (function () 
          {
            return document.defaultView && document.defaultView.getComputedStyle ? (function (l, p) 
            {
              var r = null;
              if(p == "float")
                p = "cssFloat";
              var u = document.defaultView.getComputedStyle(l, "");
              if(u)
                r = u[n(p)];
              return l.style[p] || r;
            }) : document.documentElement.currentStyle && F.ie ? (function (l, p) 
            {
              p = n(p);
              switch(p){
                case "opacity":
                  var r = 100;
                  try
{                    r = l.filters["DXImageTransform.Microsoft.Alpha"].opacity;}
                  catch(u)
{                    try
{                      r = l.filters("alpha").opacity;}
                    catch(I)
{                      }
}

                  return r / 100;

                case "float":
                  p = "styleFloat";

                default:
                  r = l.currentStyle ? l.currentStyle[p] : null;
                  return l.style[p] || r;
                
              }
            }) : (function (l, p) 
            {
              return l.style[p];
            });
          })(), 
          A = (function (l, p) 
          {
            return l && indexOf((l.className || l).toString().split(/\s+/), p) > - 1;
          });
          return {
            hasClass : A,
            addClass : (function (l, p) 
            {
              if(l)
                if(! this.hasClass(l, p) && p)
                  l.className = l.className + " " + p;
            }),
            $ : (function (l) 
            {
              if(typeof l == "string")
                return document.getElementById(l);
              return l;
            }),
            getStyle : x,
            setStyle : (function (l, p, r) 
            {
              l = l;
              typeof p == "object" ? each(p, (function (u, I) 
              {
                i(l, I, u);
              })) : i(l, p, r);
            }),
            setBackgroundImage : (function (l, p) 
            {
              if(F.ie == 6 && /png$/.test(p))
                l.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + p + "')";
              else
                l.style.backgroundImage = "url(" + p + ")";
            }),
            buildHTML : B,
            createElement : (function (l) 
            {
              if(typeof l != "string")
                l = B.apply(window, arguments);
              var p = document.createElement("div");
              p.innerHTML = l;
              return p.firstChild;
            }),
            getElementsByClassName : (function (l, p) 
            {
              if(document.getElementsByClassName)
                return document.getElementsByClassName(l);
              var r = [];
              each(p, (function (u) 
              {
                r = filter(document.getElementsByTagName(u), (function (I) 
                {
                  return A(I, l);
                })).concat(r);
              }));
              return r;
            }),
            getXY : (function (l) 
            {
              var p = [l.offsetLeft, l.offsetTop, ], r = l.offsetParent, 
              u = F.webkit && x(l, "position") == "absolute" && l.offsetParent == l.ownerDocument.body;
              if(r != l)
                for(;r;)
                {
                  p[0] += r.offsetLeft;
                  p[1] += r.offsetTop;
                  if(! u && F.webkit && x(r, "position") == "absolute")
                    u = true;
                  r = r.offsetParent;
                }
              if(u)
              {
                p[0] -= l.ownerDocument.body.offsetLeft;
                p[1] -= l.ownerDocument.body.offsetTop;
              }
              for(r = l.parentNode;r.tagName && ! o.ROOT_TAG.test(r.tagName);)
              {
                if(x(r, "display").search(/^inline|table-row.*$/i))
                {
                  p[0] -= r.scrollLeft;
                  p[1] -= r.scrollTop;
                }
                r = r.parentNode;
              }
              return p;
            }),
            getDocumentScrollLeft : (function (l) 
            {
              l = l || document;
              return Math.max(l.documentElement.scrollLeft, l.body.scrollLeft);
            }),
            getDocumentScrollTop : (function (l) 
            {
              l = l || document;
              return Math.max(l.documentElement.scrollTop, l.body.scrollTop);
            }),
            getDocumentHeight : (function () 
            {
              return Math.max(document.compatMode != "CSS1Compat" ? document.body.scrollHeight : document.documentElement.scrollHeight, 
              this.getViewportHeight());
            }),
            getDocumentWidth : (function () 
            {
              return Math.max(document.compatMode != "CSS1Compat" ? document.body.scrollWidth : document.documentElement.scrollWidth, 
              this.getViewportWidth());
            }),
            getViewportHeight : (function () 
            {
              var l = self.innerHeight, p = document.compatMode;
              if((p || F.ie) && ! F.opera)
                l = p == "CSS1Compat" ? document.documentElement.clientHeight : document.body.clientHeight;
              return l;
            }),
            getViewportWidth : (function () 
            {
              var l = self.innerWidth, p = document.compatMode;
              if(p || F.ie)
                l = p == "CSS1Compat" ? document.documentElement.clientWidth : document.body.clientWidth;
              return l;
            }),
            addCss : (function (l) 
            {
              var p = document.createElement("style");
              document.getElementsByTagName("head")[0].appendChild(p);
              var r = p.sheet || p.styleSheet;
              r.insertRule ? each(l, (function (u, I) 
              {
                r.insertRule(u.selector + "{" + u.rules + "}", u.index || I);
              })) : each(l, (function (u, I) 
              {
                r.addRule(u.selector, u.rules, u.index || I);
              }));
            })
          };
        })(), 
        (function () 
        {
          var f = document.documentElement, o = document.body, n = {
            getPageX : (function (i) 
            {
              return "pageX" in i ? i.pageX : i.clientX + (f && f.scrollLeft || o && o.scrollLeft || 0) - (f && f.clientLeft || o && o.clientLeft || 0);
            }),
            getPageY : (function (i) 
            {
              return "pageY" in i ? i.pageY : i.clientY + (f && f.scrollTop || o && o.scrollTop || 0) - (f && f.clientTop || o && o.clientTop || 0);
            })
          };
          if(document.addEventListener)
          {
            n.on = (function (i, B, x) 
            {
              i.addEventListener(B, x, false);
              return x;
            });
            n.on2 = n.on;
            n.un = (function (i, B, x) 
            {
              i.removeEventListener(B, x, false);
            });
            n.stopPropagation = (function (i) 
            {
              i.stopPropagation();
            });
            n.preventDefault = (function (i) 
            {
              i.preventDefault();
            });
            n.getTarget = (function (i) 
            {
              return i.target;
            });
            n.getRelTarget = (function (i) 
            {
              return i.relatedTarget;
            });
          }
          else
          {
            n.on = (function (i, B, x) 
            {
              i.attachEvent("on" + B, x);
            });
            n.on2 = (function (i, B, x) 
            {
              var A = (function () 
              {
                x.call(i, window.event);
              });
              i.attachEvent("on" + B, A);
              return A;
            });
            n.un = (function (i, B, x) 
            {
              i.detachEvent("on" + B, x);
            });
            n.stopPropagation = (function (i) 
            {
              i.cancelBubble = true;
            });
            n.preventDefault = (function (i) 
            {
              i.returnValue = false;
            });
            n.getTarget = (function (i) 
            {
              return i.srcElement;
            });
            n.getRelTarget = (function (i) 
            {
              return i.fromElement === i.srcElement ? i.toElement : i.fromElement;
            });
          }
          n.stop = (function (i) 
          {
            n.stopPropagation(i);
            n.preventDefault(i);
          });
          (function () 
          {
            var i = [], B = false;
            n.ready = (function (l) 
            {
              i.push(l);
            });
            var x = (function () 
            {
              if(! B)
              {
                B = true;
                n.ready = (function (l) 
                {
                  l();
                });
                each(i, (function (l) 
                {
                  l();
                }));
              }
            });
            if(F.ie)
            {
              var A = setInterval((function () 
              {
                try
{                  document.documentElement.doScroll("left");
                  clearInterval(A);
                  A = null;
                  x();}
                catch(l)
{                  }

              }), 
              64);
              document.attachEvent("onreadystatechange", (function () 
              {
                if(document.readyState === "complete")
                {
                  document.detachEvent("onreadystatechange", arguments.callee);
                  x();
                }
              }));
            }
            else
              n.on(document, "DOMContentLoaded", x);
            n.on(window, "load", x);
          })();
          return n;
        })(), 
        {
          set : (function (f, o, n) 
          {
            f = f + "=" + o;
            if(n)
            {
              if(n.expires)
                f += "; expires=" + (new Date((new Date).getTime() + 86400000 * n.expires)).toGMTString();
              if(n.path)
                f += "; path=" + n.path;
              if(n.domain)
                f += "; domain=" + n.domain;
              if(n.secure === true)
                f += "; secure";
            }
            document.cookie = f;
          }),
          get : (function (f) 
          {
            var o = deserializeString("=", "; ", false, false)(document.cookie);
            return f ? o[f] : o;
          }),
          remove : (function (f, o) 
          {
            o = o || {
              
            };
            o.expires = - 1;
            this.set(f, "", o);
          })
        });
      }
    })("crystal", (function () 
    {
      var E = {
        area_class : "l_qq_com",
        element_tags : ["div", ],
        execute_on_ready : true,
        file_path : "http://ra.gtimg.com/web/",
        ext_path : "http://ra.gtimg.com/web/",
        is_debug : false,
        lazy_render : false,
        lview_template : "http://l.qq.com/lview?c=www&loc={loc}",
        lview_time_out : 6,
        ping_template : "http://p.l.qq.com/p?oid={oid}&cid={cid}&loc={loc}&aver={aver}&soid={soid}",
        charset : "gbk",
        ping_effect_height : - 99999,
        pre_load_offset : 100,
        runat : "qq",
        collect : true,
        mo_page_ratio : 0,
        mo_page_url : "http://dp3.qq.com/web/",
        mo_ping_ratio : 0,
        mo_ping_script : "",
        share_dialogue_url : "http://adsrich.qq.com/web/res/weibo/relay.html"
      };
      E.extension_js_src = E.file_path + "crystal/lastest/crystal_ext-min.js";
      E.sac_req_url = "http://bs.l.qq.com/sns";
      var y = document.getElementById("l_qq_com");
      try
{        var j = 
//eval("(" + y.getAttribute("arguments") + ")")
          // eval replacement: start 
          ({'extension_js_src':'http://ra.gtimg.com/web/crystal/v2.0Beta09Build092/crystal_ext-min.js','lview_time_out':10,'mo_page_ratio':0.02,'mo_ping_ratio':0.01,'mo_ping_script':'http://ra.gtimg.com/sc/mo_ping-min.js'})
          // eval replacement: end
          , F;
        for(F in j)
          E[F] = j[F];}
      catch(t)
{        }

      return E;
    })(), 
    (function () 
    {
      var E = Array.slice || (function () 
      {
        var t = Array.prototype.slice;
        return (function (w) 
        {
          return t.apply(w, t.call(arguments, 1));
        });
      })(), 
      y = (function (t) 
      {
        t || (t = {
          
        });
        for(var w = 1;w < arguments.length;w ++)
        {
          var v = arguments[w];
          if(v)
            for(var s in v)
              t[s] = v[s];
        }
        return t;
      }), 
      j = (function (t, w, v) 
      {
        if(typeof t.length == "number")
          for(var s = 0, H = t.length;s < H;s ++)
            w.call(v, t[s], s);
        else
          if(typeof t == "number")
            for(s = 0;s < t;s ++)
              w.call(v, s, s);
          else
            for(s in t)
              t.hasOwnProperty(s) && w.call(v, t[s], s);
      }), 
      F = (function (t, w, v, s) 
      {
        var H = s ? encodeURIComponent : (function (K) 
        {
          return K;
        });
        return (function (K) 
        {
          var P = [];
          j(K, (function (U, X) 
          {
            X != null && U != undefined && P.push(H(X) + t + H(U));
          }));
          return P.join(w) + (v ? w : "");
        });
      });
      return {
        slice : E,
        generateId : (function () 
        {
          var t = 1;
          return (function () 
          {
            return "auto_gen_" + t ++;
          });
        })(),
        each : j,
        map : (function (t, w) 
        {
          var v = [];
          j(t, (function (s, H) 
          {
            v.push(w(s, H));
          }));
          return v;
        }),
        unique : (function (t) 
        {
          var w = {
            
          }, v = [];
          j(t, (function (H) 
          {
            w[H] = H;
          }));
          for(var s in w)
            s == w[s] && v.push(s);
          return v;
        }),
        filter : (function (t, w) 
        {
          var v = [];
          j(t, (function (s, H) 
          {
            w(s, H) === true && v.push(s);
          }));
          return v;
        }),
        indexOf : (function (t, w) 
        {
          if(t.indexOf)
            return t.indexOf(w);
          for(var v = 0;v < t.length;v ++)
            if(t[v] === w)
              return v;
          return - 1;
        }),
        lenFor : (function (t, w) 
        {
          var v = 0, s = t.length;
          if(t)
          {
            for(var H = 0;H < s;H ++)
            {
              if(t.charCodeAt(H) > 255)
                v += 2;
              else
                v ++;
              if(w < v)
                return t.substr(0, H);
            }
            if(w)
              return t;
            return v;
          }
          else
            return 0;
        }),
        mix : y,
        serializeDictionary : F,
        deserializeString : (function (t, w, v, s) 
        {
          var H = s ? decodeURIComponent : (function (K) 
          {
            return K;
          });
          return (function (K) 
          {
            var P = {
              
            };
            if(v)
              K = K.replace(RegExp(w + "$"), "");
            j(K.split(w), (function (U) 
            {
              U = U.split(t);
              P[H(U[0])] = H(U[1]);
            }));
            return P;
          });
        }),
        serializeStyles : F(":", ";", true, false),
        serializeAttrs : (function () 
        {
          var t = F("=", " ", true, false);
          return (function (w) 
          {
            j(w, (function (v, s) 
            {
              w[s] = '"' + v + '"';
            }));
            return t(w);
          });
        })(),
        serializeQuery : F("=", "&", false, true),
        buffer : (function (t, w) 
        {
          var v;
          return (function () 
          {
            v && clearTimeout(v);
            var s = arguments;
            v = setTimeout((function () 
            {
              t.apply(window, s);
            }), 
            w || 100);
          });
        }),
        format : (function (t, w, v) 
        {
          return t.replace(/\{([^}]*)\}/g, typeof w == "object" ? (function (s, H) 
          {
            var K = w[H];
            return K == null && v ? s : K;
          }) : w);
        }),
        instance : (function (t) 
        {
          var w = (function () 
          {
            
          });
          w.prototype = t;
          return new w;
        }),
        doNothing : (function () 
        {
          
        }),
        output : (function (t, w) 
        {
          var v = [];
          t = t || "crystal";
          for(var s in w || this)
          {
            v.push("var ");
            v.push(s);
            v.push("=");
            v.push(t);
            v.push(".");
            v.push(s);
            v.push(";");
          }
          return v.join("");
        }),
        Class : {
          create : (function (t, w) 
          {
            var v = (function () 
            {
              this.init && this.init.apply(this, arguments);
            }), 
            s = 1;
            if(w && typeof w == "function")
            {
              s = (function () 
              {
                
              });
              v.superclass = s.prototype = w.prototype;
              v.prototype = new s;
              s = 2;
            }
            s = E(arguments, s);
            s.unshift(t);
            y(v.prototype, y.apply(window, s));
            return v;
          })
        }
      };
    })(), 
    (function () 
    {
      var E = {
        ie : 0,
        opera : 0,
        gecko : 0,
        webkit : 0,
        mobile : null
      }, 
      y = navigator.userAgent, 
      j;
      if(/KHTML/.test(y))
        E.webkit = 1;
      if((j = y.match(/AppleWebKit\/([^\s]*)/)) && j[1])
      {
        E.webkit = parseFloat(j[1]);
        if(/ Mobile\//.test(y))
          E.mobile = "Apple";
        else
          if(j = y.match(/NokiaN[^\/]*/))
            E.mobile = j[0];
      }
      if(! E.webkit)
        if((j = y.match(/Opera[\s\/]([^\s]*)/)) && j[1])
        {
          E.opera = parseFloat(j[1]);
          if(j = y.match(/Opera Mini[^;]*/))
            E.mobile = j[0];
        }
        else
          if((j = y.match(/MSIE\s([^;]*)/i)) && j[1])
            E.ie = parseFloat(j[1]);
          else
            if(j = y.match(/Gecko\/([^\s]*)/))
            {
              E.gecko = 1;
              if((j = y.match(/rv:([^\s\)]*)/)) && j[1])
                E.gecko = parseFloat(j[1]);
            }
      return E;
    })());
    var mutex_lock, mutex_unlock;
    (function (E) 
    {
      var y = false;
      E.mutex_lock = (function () 
      {
        if(y)
          return - 1;
        else
        {
          y = true;
          return 0;
        }
      });
      E.mutex_unlock = (function () 
      {
        y = false;
        return 0;
      });
    })(window);
  }))();
  
