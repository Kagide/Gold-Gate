import type {Metadata} from 'next';
import {baseUrl,company,services} from './content';
export function pageMetadata(title:string,description:string,path:string):Metadata{
 const url=baseUrl?baseUrl+path:undefined;
 const fullTitle=title+' | Gold Gate';
 return {title:{absolute:fullTitle},description,alternates:url?{canonical:url}:undefined,openGraph:{title:fullTitle,description,type:'website',siteName:company.name,locale:'en_RW',...(url?{url,images:[{url:baseUrl+'/opengraph-image',width:1200,height:630,alt:'Gold Gate — professional business services in Kigali, Rwanda'}]}:{})},twitter:{card:'summary_large_image',title:fullTitle,description,...(baseUrl?{images:[baseUrl+'/opengraph-image']}:{})}};
}
export const serviceSearchCopy:Record<string,{title:string;description:string}>={
 'business-start-up':{title:'Business Start-Up Support in Rwanda',description:'Start your business in Rwanda with Gold Gate. Business planning, registration assistance, cash flow forecasts and accounting setup from our Kigali office.'},
 'accounting-business-support':{title:'Accounting & Bookkeeping Services in Kigali',description:'Gold Gate provides bookkeeping, annual accounts, payroll, financial reporting and business administration support for businesses in Kigali, Rwanda.'},
 'taxation-vat':{title:'Tax Advisory & VAT Services in Rwanda',description:'Get support with corporate tax, VAT registration, tax returns, reconciliations and RRA enquiries. Contact Gold Gate in Kigali, Rwanda.'},
 'consultancy-systems':{title:'Business Consultancy & Systems Advice in Rwanda',description:'Gold Gate supports business planning, feasibility studies, financial modelling, project management and reporting systems in Kigali, Rwanda.'},
 'it-marketing':{title:'IT, QuickBooks & Marketing Support in Kigali',description:'Explore Gold Gate’s accounting software, QuickBooks support, business branding, marketing materials and stationery services in Kigali, Rwanda.'}
};
export function companySchema(){if(!baseUrl)return null;return {'@context':'https://schema.org','@graph':[
 {'@type':'ProfessionalService','@id':baseUrl+'/#company',name:company.name,url:baseUrl,logo:baseUrl+'/logo-original.png',telephone:company.phone,description:'Accounting, taxation, business start-up, consultancy, financial systems and marketing support in Kigali, Rwanda.',address:{'@type':'PostalAddress',streetAddress:company.address,addressLocality:'Kigali',addressCountry:'RW'},areaServed:{'@type':'Country',name:'Rwanda'},hasOfferCatalog:{'@type':'OfferCatalog',name:'Professional services',itemListElement:services.map(s=>({'@type':'Offer',itemOffered:{'@type':'Service',name:s.title,url:baseUrl+'/services/'+s.slug}}))}},
 {'@type':'WebSite','@id':baseUrl+'/#website',name:company.name,url:baseUrl,inLanguage:'en',publisher:{'@id':baseUrl+'/#company'}}]}}
export function serviceSchema(slug:string){const s=services.find(s=>s.slug===slug);if(!baseUrl||!s)return null;const url=baseUrl+'/services/'+slug;return {'@context':'https://schema.org','@graph':[{'@type':'Service','@id':url+'#service',name:s.title,description:s.intro,url,serviceType:s.title,areaServed:{'@type':'Country',name:'Rwanda'},provider:{'@id':baseUrl+'/#company'}},{'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:baseUrl},{'@type':'ListItem',position:2,name:'Services',item:baseUrl+'/services'},{'@type':'ListItem',position:3,name:s.title,item:url}]}]}}
export function jsonLd(value:unknown){return JSON.stringify(value).replace(/</g,'\\u003c')}
