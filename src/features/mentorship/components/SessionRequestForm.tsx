'use client';
import {useState,type FormEvent} from 'react';
import {submitContact} from '@/features/contact/services/contact.service';
import {mentorshipTopics} from '../data/topics';
export default function SessionRequestForm({initialTopic=''}:{initialTopic?:string}) {
  const [pending,setPending]=useState(false);
  const [status,setStatus]=useState('');
  async function submit(event:FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if(pending)return;
    const form=event.currentTarget;
    const values=new FormData(form);
    const topic=mentorshipTopics.find(item=>item.slug===values.get('topic'));
    if(!topic){setStatus('Please select a focus area.');return;}
    setPending(true);setStatus('');
    try {
      await submitContact({
        name:String(values.get('name')).trim(),
        email:String(values.get('email')).trim(),
        subject:'Mentorship request: '+topic.title,
        message:[
          'Focus area: '+topic.title,
          'Background: '+values.get('background'),
          'Availability and timezone: '+String(values.get('availability')).trim(),
          'Project link: '+(values.get('project')||'Not provided'),
          'Session goals: '+String(values.get('goals')).trim(),
        ].join('\n'),
      });
      setStatus('Your mentorship request has been sent. Our team will contact you to discuss a suitable mentor and session details. Your session is not yet scheduled.');
      form.reset();
    } catch(error) {
      setStatus(error instanceof Error?error.message:'Unable to send your request. Please try again.');
    } finally {setPending(false);}
  }
  return <form onSubmit={submit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9"><h2 className="text-2xl font-bold">Request your conversation</h2><p className="lead mt-2 mb-7 text-sm">Fields marked * are required.</p><fieldset disabled={pending} className="space-y-5">
    <div className="grid gap-5 sm:grid-cols-2"><label className="block text-sm font-bold">Full name *<input name="name" required autoComplete="name" maxLength={200} className="field mt-2"/></label><label className="block text-sm font-bold">Email address *<input name="email" type="email" required autoComplete="email" maxLength={200} className="field mt-2"/></label></div>
    <label className="block text-sm font-bold">Focus area *<select name="topic" required defaultValue={initialTopic} className="field mt-2"><option value="">Choose a focus area</option>{mentorshipTopics.map(topic=><option key={topic.slug} value={topic.slug}>{topic.title}</option>)}</select></label>
    <label className="block text-sm font-bold">Current background *<select name="background" required defaultValue="" className="field mt-2"><option value="">Select your background</option><option>Student</option><option>Recent graduate</option><option>Working professional</option><option>Career changer</option><option>Other</option></select></label>
    <label className="block text-sm font-bold">Availability and timezone *<input name="availability" required maxLength={200} placeholder="For example: Weekdays after 6 pm, India Standard Time" className="field mt-2"/><span className="mt-2 block text-xs font-normal leading-5 text-slate-500">Share a few times that suit you. We will confirm a time after checking mentor availability.</span></label>
    <label className="block text-sm font-bold">Project or portfolio URL <span className="font-normal">(optional)</span><input name="project" type="url" maxLength={500} placeholder="https://" className="field mt-2"/></label>
    <label className="block text-sm font-bold">What would you like help with? *<textarea name="goals" required minLength={20} maxLength={3000} rows={5} placeholder="Describe your current challenge and what you want to get from the conversation (at least 20 characters)." className="field mt-2"/></label>
    <label className="flex items-start gap-3 text-sm leading-6 text-slate-600"><input type="checkbox" required className="mt-1.5"/>I agree to be contacted about this mentorship request. *</label>
    <button disabled={pending} type="submit" className="btn-primary w-full">{pending?'Sending request...':'Send session request'}</button>
  </fieldset>{status&&<p role="status" aria-live="polite" className="mt-5 rounded-xl bg-slate-50 p-4 text-sm leading-6">{status}</p>}</form>;
}
