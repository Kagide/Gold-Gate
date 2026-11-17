import {pageMetadata} from '@/lib/seo';
import type {Metadata} from 'next';import {PageHero,ServiceGrid,CTA} from '@/components/shared';import {baseUrl} from '@/lib/content';
export const metadata:Metadata=pageMetadata("Business, Accounting & Tax Services in Rwanda","Explore Gold Gate’s business start-up, accounting, tax advisory, consultancy, IT and marketing services in Kigali, Rwanda.","/services");
export default function Services(){return <><PageHero eyebrow="Our services" title="Connected expertise. Clearer possibilities." description="From the foundations of a new business to the systems behind an established one. Find support for where you are—and where you want to go."/><section className="section container"><ServiceGrid/></section><CTA/></>}
