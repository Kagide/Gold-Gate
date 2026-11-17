'use client';
import Link from 'next/link';
import {useEffect,useRef,useState} from 'react';
import {usePathname} from 'next/navigation';
import {ArrowUpRight,ChevronDown,Menu,X,ArrowRight} from 'lucide-react';
import {services} from '@/lib/content';
import {serviceIcons} from './icons';
export function Brand(){return <span className="brand"><img className="original-logo" src="/logo-original.png" alt="Gold Gate. The difference is real." width={220} height={46}/></span>}
export default function Header(){
  const path=usePathname();
  const [menus,setMenus]=useState({path,mega:false,mobile:false});
  const mega=menus.path===path&&menus.mega,mobile=menus.path===path&&menus.mobile;
  const setMega=(value:boolean)=>setMenus(current=>({path,mega:value,mobile:current.path===path?current.mobile:false}));
  const setMobile=(value:boolean)=>setMenus(current=>({path,mobile:value,mega:current.path===path?current.mega:false}));
  const root=useRef<HTMLElement>(null),toggle=useRef<HTMLButtonElement>(null),serviceToggle=useRef<HTMLButtonElement>(null);
  const close=()=>setMenus({path,mega:false,mobile:false});
  useEffect(()=>{function outside(e:PointerEvent){if(!root.current?.contains(e.target as Node))setMenus(current=>({...current,mega:false,mobile:false}))}document.addEventListener('pointerdown',outside);return()=>document.removeEventListener('pointerdown',outside)},[]);
  return <header ref={root} className="header" onKeyDown={e=>{if(e.key==='Escape'){e.preventDefault();if(mega){setMega(false);serviceToggle.current?.focus()}else if(mobile){setMobile(false);toggle.current?.focus()}}}}>
    <div className="nav-wrap"><Link href="/" aria-label="Gold Gate home" onClick={close}><Brand/></Link>
      <button className="mobile-toggle" ref={toggle} aria-label={mobile?'Close navigation':'Open navigation'} aria-expanded={mobile} aria-controls="main-nav" onClick={()=>{setMobile(!mobile);setMega(false)}}>{mobile?<X/>:<Menu/>}</button>
      <nav id="main-nav" className={mobile?'navigation open':'navigation'} aria-label="Main navigation">
        <Link className={path==='/'?'active':''} href="/" onClick={close}>Home</Link>
        <Link className={path==='/about'?'active':''} href="/about" onClick={close}>About</Link>
        <div className="services-navigation"><div className="services-navigation-trigger">
          <Link className={path.startsWith('/services')?'active':''} href="/services" onClick={close}>Services</Link>
          <button ref={serviceToggle} className="services-menu-toggle" aria-label={mega?'Close services menu':'Open services menu'} aria-expanded={mega} aria-controls="services-menu" onClick={()=>setMega(!mega)}><ChevronDown size={16} className={mega?'rotate':''}/></button>
        </div>
        {mega&&<div id="services-menu" className="mega"><div className="mega-intro"><span className="eyebrow">Our expertise</span><h2>Support for your<br/>next chapter.</h2></div><div><div className="mega-links">{services.map((s,i)=>{const Icon=serviceIcons[i];return <Link href={'/services/'+s.slug} key={s.slug} onClick={close}><Icon size={21}/><span><strong>{s.title}</strong><small>{s.short}</small></span><ArrowUpRight size={15}/></Link>})}</div><Link className="text-link mega-all" href="/services" onClick={close}>View all services <ArrowRight size={16}/></Link></div></div>}
        </div>
        <Link className={path==='/contact'?'active':''} href="/contact" onClick={close}>Contact</Link>
        <Link className="button small nav-cta" href="/contact" onClick={close}>Request a consultation <ArrowUpRight size={16}/></Link>
      </nav>
    </div>
  </header>
}
