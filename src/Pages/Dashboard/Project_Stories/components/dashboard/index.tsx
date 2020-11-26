import React, {FC} from 'react';
import Dropdown from '../../../../../Components/Dropdown';
import {Loading} from '../../../../../Components/Icons';
import Input from '../../../../../Components/Input';
import Debounce from '../../../../../Helper/debounce';

import styles from './dashboard.module.css';
import StoriesTable from './table';

interface Props {
  data?: any;
  load?: boolean;
  next?: any;
  total?: any;
  search?: any;
  setType?: any;
  setTus?: any;
  first?: any;
}

const StoriesDashboard: FC<Props> = ({
  setType,
  setTus,
  search,
  data,
  load,
  next,
  total,
  first,
}) => {
  const handleSearch = Debounce((e: any) => {
    const {value} = e.target;
    search(value);
  }, 300);
  return (
    <div className={styles.wrapper}>
      <div className={styles.function}>
        <div className={styles.search}>
          <Input placeholder="Search" search onChange={handleSearch} />
        </div>
        <div className={styles.typeSort}>
          <Dropdown
            setType={setType}
            first={first}
            options={[
              {name: 'All types', value: {stoType: ''}},
              {name: 'Feature', value: {stoType: 'feature'}},
              {name: 'Bug', value: {stoType: 'bug'}},
              {name: 'Chore', value: {stoType: 'chore'}},
            ]}
          />
        </div>
        <div className={styles.statusSort}>
          <Dropdown
            setStat={setTus}
            first={first}
            options={[
              {name: 'All status', value: {stoStat: ''}},
              {name: 'Unstarted', value: {stoStat: 'unstarted'}},
              {name: 'Finished', value: {stoStat: 'finished'}},
              {name: 'Delivered', value: {stoStat: 'delivered'}},
              {name: 'Accepted', value: {stoStat: 'accepted'}},
              {name: 'Rejected', value: {stoStat: 'rejected'}},
            ]}
          />
        </div>
      </div>
      <StoriesTable total={total} next={next} data={data} />
      {load ? (
        <div className={styles.load}>
          <Loading />
        </div>
      ) : null}
    </div>
  );
};

export default StoriesDashboard;
