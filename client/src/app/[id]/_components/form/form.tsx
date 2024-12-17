'use client';

import { ColorSelector, XInput, XTextButton } from '@/app/components';
import { ITask } from '@/interfaces';
import { useAppDispatch } from '@/lib/hooks';
import { dispatchTasksUpdateAction } from '@/lib/store';
import { showSuccessNotif } from '@/lib/utils';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './form.module.scss';
import { FormFields, schema } from './schema';

interface IProps {
  task: ITask;
}

export const Form = (props: IProps) => {
  const { task } = props;
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [, setSelectedColor] = useState<string>('');

  const form = useForm<FormFields>({
    resolver: zodResolver(schema),
    defaultValues: {
      ...task,
    },
  });

  const onColorSelected = (color: string) => {
    setSelectedColor(color);
    form.setValue('color', color);
  };

  const handleOnSubmit = async (data: FormFields) => {
    await dispatchTasksUpdateAction(dispatch, task.id, data)
      .then(() => {
        showSuccessNotif('Task Updated Successfully');
        router.back();
      })
      .catch(() => {});
  };

  return (
    <form className={styles.form} onSubmit={form.handleSubmit(handleOnSubmit)}>
      <XInput
        label="Title"
        placeholder={schema.shape.title.description}
        error={form.formState.errors.title?.message}
        {...form.register('title')}
      />

      <ColorSelector onSelected={onColorSelected} selectedColor={form.getValues().color ?? ''} />

      <XTextButton icon={faCheck} className="w-full mt-3" formSubmit>
        Save
      </XTextButton>
    </form>
  );
};
