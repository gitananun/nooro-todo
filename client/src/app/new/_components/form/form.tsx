'use client';
import { XInput, XTextButton } from '@/app/components';
import { useAppDispatch } from '@/lib/hooks';
import { dispatchTasksCreateAction } from '@/lib/store';
import { showSuccessNotif } from '@/lib/utils';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ColorSelector } from '..';
import styles from './form.module.scss';
import { FormFields, schema } from './schema';

export const Form = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [, setSelectedColor] = useState<string>('');

  const form = useForm<FormFields>({
    resolver: zodResolver(schema),
    defaultValues: {},
  });

  useEffect(
    () => form.setFocus('title'),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const onColorSelected = (color: string) => {
    setSelectedColor(color);
    form.setValue('color', color);
  };

  const handleOnSubmit = async (data: FormFields) => {
    await dispatchTasksCreateAction(dispatch, data)
      .then(() => {
        showSuccessNotif('Task Added Successfully');
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

      <ColorSelector onSelected={onColorSelected} selectedColor={form.getValues().color} />

      <XTextButton icon={faCirclePlus} className="w-full mt-3" formSubmit>
        Add Task
      </XTextButton>
    </form>
  );
};
