import H1 from '@/components/ui/heading';
import P2 from '@/components/ui/Paragraph';
import P1 from '@/components/ui/Paragraph1';
import { CodePreview } from '@/components/ui/CodePreview';

import React from 'react';
import { CodeBlockDemo } from '@/components/ui/Codeblock';
import { AccordionDemo } from '@/app/(components)/components/preview/AccordianDemo';
import { Installation } from './Installation';

interface PageProps {
  heading: string;
  description: string;
  library: string;
  code: string;
  filename: string;
}

const FullComponent: React.FC<PageProps> = ({
  heading,
  description,
  library,
  code,
  filename,
}) => {
  return (
    <div className="md:px-20 px-4">
      <div className="flex flex-col md:space-y-2 space-y-1">
        <H1 H1={heading} />
        <div className="flex flex-col md:space-y-1">
          <P1 P1={description} />
          <P2 Lib={library} />
        </div>
      </div>
      <div className="mt-4 w-full max-h-full overflow-auto">
        <CodePreview
          tab1Content={
            <div>
              <AccordionDemo />
            </div>
          }
          tab2Content={
            <div className="">
              <CodeBlockDemo
                code={code}
                filename={filename}
                highlightLines={[]}
              />
            </div>
          }
        />
      </div>
      <div>
        <div>
          <h1 className='sm:text-2xl sm:mt-10 mt-4 text-lg font-bold '>Installation</h1>
          <p className='mt-2 border border-b-0 dark:border-gray-700 border-gray-300'></p>
        </div>
        <div className='mt-4'>
            <Installation 
            tab1Content={
              <div>
                <P2 Lib={library} />
              </div>
            }
            tab2Content={
                <div>
                    <P2 Lib={library} />
                </div>
                }
            />
        </div>
      </div>
    </div>
  );
};

export default FullComponent;
